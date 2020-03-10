import React from 'react';
import {
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const CreateOrder = props => {
  return (
    <Create {...props}>
      <SimpleForm redirect='list'>
        <ReferenceInput source='orderBy' label='Name' reference='users'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput source='product' label='Product' reference='products'>
          <SelectInput optionText='description' />
        </ReferenceInput>
        <NumberInput source='quantity' />
      </SimpleForm>
    </Create>
  );
};

export default CreateOrder;
