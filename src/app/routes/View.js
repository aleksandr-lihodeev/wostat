import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import ResearchesPage from "../../pages/ResearchesPage/ResearchesPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import VacancyPage from "../../pages/VacancyPage/VacancyPage";

const View = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/research'} element={<ResearchesPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/vacancy'} element={<VacancyPage/>}/>
        </Routes>
    );
};

export default View;
