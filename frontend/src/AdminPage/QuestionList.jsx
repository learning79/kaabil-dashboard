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

export const QuestionList = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="question" />
      <TextField source="options" />
      <TextField source="solution" />
      <TextField source="reference" />
      <TextField source="level" />
      <TextField source="question_type" />
      <TextField source="comprehension_question" />
      <TextField source="question_image" />
      <TextField source="answer" />
      <ReferenceField source="courseName" reference="courses">
        <TextField source="subjectName" />
      </ReferenceField>
      <NumberField source="LessonId" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const QuestionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="question" />
      <TextInput source="options" />
      <TextInput source="solution" multiline />
      <TextInput source="reference" />
      <SelectInput source="level" choices={[
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
      ]} />
      <SelectInput source="question_type" choices={[
        { id: 'COMPREHENSION', name: 'Comprehension' },
        { id: 'LIST BASED', name: 'List Based' },
        { id: 'MCQ', name: 'Multiple Choice' },
        { id: 'Numerical', name: 'Numerical' },
      ]} />
      <TextInput source="comprehension_question" multiline />
      <TextInput source="question_image" />
      <TextInput source="answer" multiline />
      <ReferenceInput source="courseName" reference="courses">
        <SelectInput optionText="subjectName" />
      </ReferenceInput>
      <NumberInput source="LessonId" />
    </SimpleForm>
  </Create>
);

export const QuestionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="question" />
      <TextInput source="options" />
      <TextInput source="solution" multiline />
      <TextInput source="reference" />
      <SelectInput source="level" choices={[
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
      ]} />
      <SelectInput source="question_type" choices={[
        { id: 'COMPREHENSION', name: 'Comprehension' },
        { id: 'LIST BASED', name: 'List Based' },
        { id: 'MCQ', name: 'Multiple Choice' },
        { id: 'Numerical', name: 'Numerical' },
      ]} />
      <TextInput source="comprehension_question" multiline />
      <TextInput source="question_image" />
      <TextInput source="answer" multiline />
      <ReferenceInput source="courseName" reference="courses">
        <SelectInput optionText="subjectName" />
      </ReferenceInput>
      <NumberInput source="LessonId" />
    </SimpleForm>
  </Edit>
);