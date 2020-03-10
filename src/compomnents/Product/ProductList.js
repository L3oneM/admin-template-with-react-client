import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  ImageField
} from 'react-admin';

const ProductFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label='Product Name'
      source='description'
      reference='products'
      allowEmpty
    >
      <SelectInput optionText='description' />
    </ReferenceInput>
  </Filter>
);

const ProductList = props => {
  return (
    <List {...props} bulkActionButtons={false} filters={<ProductFilter />}>
      <Datagrid>
        <TextField source='description' label='Product name' />
        <ImageField source='pictures.src' title='Profile Pic' />
        <NumberField
          source='price'
          options={{ style: 'currency', currency: 'EUR' }}
        />
        <DateField source='createdAt' label='Date' />
        <NumberField source='quantity' />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ProductList;
