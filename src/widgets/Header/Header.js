import React from 'react';
import cls from './Header.module.scss'

const Header = ({children, classes}) => {
    console.log(classes)
    return (
        <header>
            <div className="container">
                <div className={`${cls.Header} ${cls[classes]}`}>{children}</div>
            </div>
        </header>
    );
};

export default Header;
