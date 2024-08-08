import { 
  List, 
  Datagrid, 
  TextField, 
  ReferenceField, 
  EditButton, 
  DeleteButton, 
  Create,
  Edit, 
  SimpleForm, 
  TextInput, 
  ReferenceInput, 
  SelectInput 
} from 'react-admin';

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="subjectName" />
      <TextField source="courseDescription" />
      <ReferenceField source="UserId" reference="users">
        <TextField source="displayName" />
      </ReferenceField>
      <TextField source="courseImage" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CourseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="subjectName" />
      <TextInput source="courseDescription" multiline />
      <ReferenceInput source="UserId" reference="users">
        <SelectInput optionText="displayName" />
      </ReferenceInput>
      <TextInput source="courseImage" />
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="subjectName" />
      <TextInput source="courseDescription" multiline />
      <ReferenceInput source="UserId" reference="users">
        <SelectInput optionText="displayName" />
      </ReferenceInput>
      <TextInput source="courseImage" />
    </SimpleForm>
  </Edit>
);