import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate } from './users';

const dataProvider = simpleRestProvider('https://admin.kaabil.me/api');

const AdminPage = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="courses" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default AdminPage;