import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput
} from 'react-admin';
import Title from '../Title';

const EditOrder = props => {
  return (
    <Edit title={<Title method='Order' />} {...props}>
      <SimpleForm>
        <TextInput disabled source='orderBy.name' label='OrdererBy' />
        <TextInput disabled source='product.description' label='Product' />
        <NumberInput source='quantity' />
        <BooleanInput source='completed' />
      </SimpleForm>
    </Edit>
  );
};

export default EditOrder;
