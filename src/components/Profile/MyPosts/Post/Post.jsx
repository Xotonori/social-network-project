import React from 'react';
import s from './Post.module.css';

const Post = props => {

    return (
        <div className={s.item}>
            <img src={require(`../../../../assets/img/Post/${props.person}.png`)} alt="avatar" className={s.avatar}/>
            <span className={s.text_post}>{props.message}</span>
            <div className={s.likesCount}>
                {props.likesCount} like
            </div>
        </div>
    );
};

export default Post;