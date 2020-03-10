import React from 'react';
import { Admin, Resource } from 'react-admin';

import UserList from './compomnents/User/UserList';
import ProductList from './compomnents/Product/ProductList';
import CreateUser from './compomnents/User/CreateUser';
import EditUser from './compomnents/User/EditUser';
import CreateProduct from './compomnents/Product/CreateProduct';
import EditProduct from './compomnents/Product/EditProduct';
import OrderList from './compomnents/Order/OrderList';
import EditOrder from './compomnents/Order/EditOrder';
import CreateOrder from './compomnents/Order/CreateOrder';
import Dashboard from './compomnents/Dashboard';
import MyLoginPage from './compomnents/Login';

import UserIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DevicesIcon from '@material-ui/icons/Devices';

import dataProvider from './services/myDataProvider';
import authProvider from './authProvider';

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name='users'
      list={UserList}
      create={CreateUser}
      edit={EditUser}
      icon={UserIcon}
    />
    <Resource
      name='products'
      list={ProductList}
      create={CreateProduct}
      edit={EditProduct}
      icon={DevicesIcon}
    />
    <Resource
      name='orders'
      list={OrderList}
      create={CreateOrder}
      edit={EditOrder}
      icon={AssignmentIcon}
    />
  </Admin>
);

export default App;
