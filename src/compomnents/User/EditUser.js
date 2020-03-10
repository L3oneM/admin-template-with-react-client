import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import Title from '../Title';

const EditUser = props => {
  return (
    <Edit title={<Title method='User' />} {...props}>
      <SimpleForm>
        <TextInput disabled source='name' />
        <TextInput source='email' />
        <TextInput source='phone' />
      </SimpleForm>
    </Edit>
  );
};

export default EditUser;
