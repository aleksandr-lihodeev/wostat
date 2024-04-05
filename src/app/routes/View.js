import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";

const View = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    );
};

export default View;
