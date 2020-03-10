import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <ReferenceInput label='User' source='name' reference='users' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
    <ReferenceInput label='Phone' source='phone' reference='users' allowEmpty>
      <SelectInput optionText='phone' />
    </ReferenceInput>
  </Filter>
);

const UserList = props => {
  return (
    <List filters={<UserFilter />} {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='phone' />
        <DateField source='createdAt' label='Date' />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
