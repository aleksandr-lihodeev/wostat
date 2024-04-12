import React from 'react';
import cls from './MyLogo.module.scss'

function MyLogo({dark}) {
    return (
        <p className={cls.myLogo} style={dark ? {
            color: 'rgb(35, 35, 64)'
        } : {
            color: 'white'
        }}>
            WOSTAT <span className={cls.myLogoPoint}>.</span>
        </p>
    );
}

export default MyLogo;
