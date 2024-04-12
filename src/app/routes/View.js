import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import ResearchesPage from "../../pages/ResearchesPage/ResearchesPage";

const View = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/research'} element={<ResearchesPage/>}/>

        </Routes>
    );
};

export default View;
