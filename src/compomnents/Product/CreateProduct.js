import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CreateProduct = props => {
  return (
    <Create {...props}>
      <SimpleForm redirect='list'>
        <TextInput source='description' label='Product name' />
        <TextInput source='price' />
        <TextInput source='quantity' />
      </SimpleForm>
    </Create>
  );
};

export default CreateProduct;
