import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CourseList, CourseCreate, CourseEdit } from './CourseList';
import { MessageList, MessageCreate, MessageEdit } from './MessageList';
import { QuestionList, QuestionCreate, QuestionEdit } from './QuestionList';
import { UserList, UserCreate, UserEdit } from './UserList';

const dataProvider = simpleRestProvider('https://admin.kaabil.me/api');

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="courses" list={CourseList} create={CourseCreate} edit={CourseEdit} />
    <Resource name="messages" list={MessageList} create={MessageCreate} edit={MessageEdit} />
    <Resource name="questions" list={QuestionList} create={QuestionCreate} edit={QuestionEdit} />
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
);

export default AdminPage;