import React from 'react';
import {List, Datagrid, TextField, DateField, ShowButton} from "react-admin";
import {EditButton} from 'react-admin';

function PostList(props) {

    return (
        <List {...props}>
            <Datagrid>

                <TextField source={'image'} className="image-text-field"/>
                <TextField source={'title'}/>
                <TextField source={'subtitle'}/>
                <TextField source={'category'}/>
                <DateField source={'date'}/>
                <TextField source={'id'}/>
                <EditButton label="Edit" basePath={'/posts'}/>
                <ShowButton label="Show" />
            </Datagrid>
        </List>
    );
}

export default PostList;
