import React from 'react';
import cls from './MyButton.module.scss'

const MyButton = ({children,classes}) => {
    return (
        <button className={`${cls.myButton} ${cls[classes]}`}>
            {children}
        </button>
    );
};

export default MyButton;
