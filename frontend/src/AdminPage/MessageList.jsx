import { 
  List, 
  Datagrid, 
  TextField, 
  NumberField, 
  ReferenceField, 
  EditButton, 
  DeleteButton, 
  Create, 
  Edit,
  SimpleForm, 
  TextInput, 
  NumberInput, 
  ReferenceInput, 
  SelectInput 
} from 'react-admin';

export const MessageList = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="questionIndex" />
      <TextField source="chats" />
      <TextField source="userInput" />
      <ReferenceField source="UserId" reference="users">
        <TextField source="displayName" />
      </ReferenceField>
      <ReferenceField source="QuestionId" reference="questions">
        <TextField source="question" />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const MessageCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="questionIndex" />
      <TextInput source="chats" multiline />
      <TextInput source="userInput" multiline />
      <ReferenceInput source="UserId" reference="users">
        <SelectInput optionText="displayName" />
      </ReferenceInput>
      <ReferenceInput source="QuestionId" reference="questions">
        <SelectInput optionText="question" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const MessageEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="questionIndex" />
      <TextInput source="chats" multiline />
      <TextInput source="userInput" multiline />
      <ReferenceInput source="UserId" reference="users">
        <SelectInput optionText="displayName" />
      </ReferenceInput>
      <ReferenceInput source="QuestionId" reference="questions">
        <SelectInput optionText="question" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);