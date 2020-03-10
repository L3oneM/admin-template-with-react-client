import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://admin-temp-react-test.herokuapp.com';

const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    console.log('GetList');
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => {
      const newJSON = json[resource];
      console.log(newJSON);

      if (resource === 'products') {
        newJSON.forEach(product => {
          const image = new Image();
          image.src = product.pictures;
          return (product.pictures = image);
        });
      }

      return {
        data: newJSON,
        total: parseInt(json.total)
      };
    });
  },

  getOne: (resource, params) => {
    console.log('GetOne');
    return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      if (resource === 'products') {
        const image = new Image();
        image.src = json.pictures;
        json.pictures = image;
      }

      return {
        data: json
      };
    });
  },

  getMany: (resource, params) => {
    console.log('GetMany');
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}/many?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    console.log('GetManyReference');
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(isNaN(json) ? 0 : json.length)
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    console.log('UpdateMany');
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => {
      console.log({ ...params.data, id: json });
      return {
        data: { ...params.data, id: json }
      };
    }),

  delete: (resource, params) => {
    console.log('Delete One');
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE'
    }).then(({ json }) => ({ data: json }));
  },

  deleteMany: (resource, params) => {
    console.log('deleteMany');
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
      body: JSON.stringify(params.data)
    }).then(({ json }) => {
      console.log(json);
      return { data: json };
    });
  }
};
