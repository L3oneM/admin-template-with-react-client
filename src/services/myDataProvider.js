import dataProvider from './dataProvider';

const myDataProvider = {
  ...dataProvider,
  update: (resource, params) => {
    if (resource !== 'products' || !params.data.pictures) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }

    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    console.log(
      'params 1',
      resource,
      params.data.title,
      resource,
      params.data.pictures
    );

    const pictures = [params.data.pictures];

    console.log('pictures 2', resource, pictures);

    const newPictures = pictures.filter(p => p.rawFile instanceof File);
    const formerPictures = pictures.filter(p => !(p.rawFile instanceof File));

    const formData = new FormData();
    formData.append('file', pictures);

    return Promise.all(newPictures.map(convertFileToBase64))
      .then(base64Pictures =>
        base64Pictures.map(picture64 => ({
          src: picture64,
          title: `${params.data.pictures.title}`
        }))
      )
      .then(transformedNewPictures =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            pictures: [...transformedNewPictures, ...formerPictures]
          }
        })
      );
  }
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export default myDataProvider;
