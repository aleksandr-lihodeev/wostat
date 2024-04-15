import React from 'react';
import {List, Datagrid, TextField} from "react-admin";
import { EditButton } from 'react-admin';

function VacancyList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source={'title'}/>
                <TextField source={'subtitle'}/>
                <TextField source={'id'}/>
                <EditButton label="Edit" basePath={'/vacancies'}/>
            </Datagrid>
        </List>
    );
}

export default VacancyList;
