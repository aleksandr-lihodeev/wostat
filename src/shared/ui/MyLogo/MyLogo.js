import React from 'react';
import cls from './MyLogo.module.scss'

function MyLogo() {
    return (
        <p className={cls.myLogo}>WOSTAT <span className={cls.myLogoPoint}>.</span></p>
    );
}

export default MyLogo;
