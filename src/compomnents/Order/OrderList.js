import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  BooleanField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const OrderFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label='Ordered By'
      source='name'
      reference='users'
      allowEmpty
    >
      <SelectInput optionText='name' />
    </ReferenceInput>
    <ReferenceInput
      label='Product'
      source='description'
      reference='products'
      allowEmpty
    >
      <SelectInput optionText='description' />
    </ReferenceInput>
  </Filter>
);

const OrderList = props => {
  return (
    <List {...props} bulkActionButtons={false} filters={<OrderFilter />}>
      <Datagrid>
        {/* <ReferenceField source='orderBy.id' reference='users'>
          <TextField source='name' />
        </ReferenceField> */}
        <DateField source='createdAt' label='Date' />
        <TextField source='orderBy.name' label='Ordered By' />
        <TextField source='product.description' label='Product' />
        <BooleanField source='completed' textAlign='right' />
        <NumberField source='quantity' />
        <NumberField
          source='total'
          options={{ style: 'currency', currency: 'EUR' }}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default OrderList;
