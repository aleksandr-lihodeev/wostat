import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from "react-admin";

function PostEdit(props) {
    return (
        <Edit title={'Edit a post'} {...props}>
            <SimpleForm>
                <TextInput source={'image'}  name={'image'}/>
                <TextInput source={'title'} name={'title'}/>
                <TextInput multiline source={'subtitle'} name={'subtitle'}/>
                <TextInput source={'category'} name={'category'}/>
                <DateInput label={'Date'} source={'date'} name={'date'}/>
            </SimpleForm>
        </Edit>
    );
}

export default PostEdit;
