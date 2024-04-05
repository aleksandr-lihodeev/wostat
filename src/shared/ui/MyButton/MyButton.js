import React from 'react';
import cls from './MyButton.module.scss'

const MyButton = ({children,classes,setState,state}) => {
    return (
        <button onClick={() => setState(!state)} className={`${cls.myButton} ${cls[classes]}`}>
            {children}
        </button>
    );
};

export default MyButton;
