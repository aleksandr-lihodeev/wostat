import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

function VacancyEdit(props) {
    return (
        <Edit title={'Edit a vacancy'} {...props}>
            <SimpleForm>
                <TextInput source={'title'} name={'title'}/>
                <TextInput multiline source={'subtitle'} name={'title'}/>
            </SimpleForm>
        </Edit>
    );
}

export default VacancyEdit;
