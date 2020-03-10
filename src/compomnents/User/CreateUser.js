import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CreateUser = props => {
  return (
    <Create {...props}>
      <SimpleForm redirect='list'>
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source='phone' />
      </SimpleForm>
    </Create>
  );
};

export default CreateUser;
