import React from 'react';
import {useNavigate } from 'react-router-dom';
import './styles/Button.css';

const Button = ({ text, onClickLink }) => {
    const navigate   = useNavigate ();

    const handleClick = () => {
        navigate(onClickLink);
    };

    return (
        <button className='button' onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;