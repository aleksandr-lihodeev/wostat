import React from 'react';
import {Create, SimpleForm, TextInput} from "react-admin";

function VacancyCreate(props) {
    return (
        <Create title={'Create a vacancy'} {...props}>
            <SimpleForm>
                <TextInput source={'title'} name={'title'}/>
                <TextInput multiline source={'subtitle'} name={'subtitle'}/>
            </SimpleForm>
        </Create>
    );
}

export default VacancyCreate;
