import React from 'react'
import s from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = props => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.friend}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

export default Friend;