import React from 'react';
import s from './Header.module.scss';
import logoImg from '../../assets/img/logo.png'
import {NavLink} from "react-router-dom";


const Header = props => {
    return (
        <header className={s.Header}>
            <img src={logoImg} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <NavLink to={`/profile/${props.userId}`}> {props.login} </NavLink> :
                    <NavLink to={'/login'}> login </NavLink>}
            </div>
        </header>
    );
};

export default Header;