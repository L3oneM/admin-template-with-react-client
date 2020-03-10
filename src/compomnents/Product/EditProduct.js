import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField
} from 'react-admin';
import Title from '../Title';

const EditProduct = props => {
  return (
    <Edit title={<Title method='Product' />} {...props}>
      <SimpleForm>
        <ImageInput source='pictures' label='Profile Image' accept='image/*'>
          <ImageField source='pictures' title='title' />
        </ImageInput>
        <TextInput disabled source='description' label='Product name' />
        <TextInput source='price' />
        <TextInput source='quantity' />
      </SimpleForm>
    </Edit>
  );
};

export default EditProduct;
