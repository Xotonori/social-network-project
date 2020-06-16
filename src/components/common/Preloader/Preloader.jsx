import React from 'react'
import loading from '../../../assets/img/Users/loading.svg'
import s from './Preloader.module.scss'


const Preloader = props => {
    return (
        <div className={s.Preloader}>
            <img src={loading} alt="loading"/>
        </div>
    );
};

export default Preloader;