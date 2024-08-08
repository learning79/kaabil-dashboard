import { 
  List, 
  Datagrid, 
  TextField, 
  DateField, 
  EmailField, 
  EditButton, 
  DeleteButton, 
  Create, 
  Edit,
  SimpleForm, 
  TextInput 
} from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="googleId" />
      <TextField source="displayName" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="image" />
      <EmailField source="email" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="googleId" />
      <TextInput source="displayName" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="image" />
      <TextInput source="email" type="email" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="googleId" />
      <TextInput source="displayName" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="image" />
      <TextInput source="email" type="email" />
    </SimpleForm>
  </Edit>
);