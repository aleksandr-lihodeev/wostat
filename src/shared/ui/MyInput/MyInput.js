import React from 'react';
import cls from "./MyInput.module.scss";

function MyInput({type, placeholder, classes}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${cls.myInput} ${cls[classes]}`}
        />
    );
}

export default MyInput;
