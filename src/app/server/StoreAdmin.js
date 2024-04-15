import restProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";
import {Admin, Resource} from "react-admin";
import PostList from "./posts/PostList";
import PostCreate from "./posts/PostCreate";
import PostEdit from "./posts/PostEdit";
import React from "react";
import VacancyList from "./vacancies/VacancyList";
import VacancyCreate from "./vacancies/VacancyCreate";
import VacancyEdit from "./vacancies/VacancyEdit";
import Dashboard from "./Dashboard";


export const StoreAdmin = () => (
    <Admin requireAuth dashboard={Dashboard} basename="/admin" dataProvider={restProvider('http://localhost:3000')} authProvider={authProvider}>
        <Resource
            name={'posts'}
            list={PostList}
            create={PostCreate}
            edit={PostEdit}

        />
        <Resource
            name={'vacancies'}
            list={VacancyList}
            create={VacancyCreate}
            edit={VacancyEdit}
        />
    </Admin>
);
