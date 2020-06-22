import React from 'react'
import s from './Social.module.css'

const Social = props => {
    return (
        <div className={s[props.socialItem]}>
            <span className={s.socialLabel}>{props.socialItem}:</span>
            <a className={s.socialAnchor}>{!!props.socialAnchor ? props.socialAnchor : 'нет =('}</a>
        </div>
    );
};

export default Social;