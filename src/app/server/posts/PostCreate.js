import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from "react-admin";

function PostCreate(props) {
    return (
        <Create title={'Create a post'} {...props}>
            <SimpleForm>
                <TextInput source={'image'} resettable name={'image'}/>
                <TextInput source={'title'} name={'title'}/>
                <TextInput multiline source={'subtitle'} name={'subtitle'}/>
                <TextInput source={'category'} name={'category'}/>
                <DateInput label={'Date'} source={'date'} name={'date'}/>
            </SimpleForm>
        </Create>
    );
}

export default PostCreate;
