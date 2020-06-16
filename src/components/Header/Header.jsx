import React from 'react';
import s from './Header.module.css';
import logoImg from '../../assets/img/logo.png'


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logoImg} alt="logo"/>
        </header>
    );
};

export default Header;