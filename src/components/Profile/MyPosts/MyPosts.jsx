import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";


const MyPosts = props => {

    let postsElements = props.posts.map(p => (<Post person={p.person} message={p.message} like={p.likesCount}/>));
    let newPostText = props.newPostText;

    let onNewPostTextChange = (e) => {
        let newText = e.target.value;
        props.dispatch(updateNewPostTextCreator(newText))
    };

    let onAddPostClick = () => {
        props.dispatch(addPostCreator());
    };

    let onKeyPressEnter = (e) => {
        if (e.key === 'Enter') {
            onAddPostClick();
        }
    };

    return (
        <div className={s.wrapPosts}>
            <div className={s.myPost}>
                <h3>My posts</h3>
                <div>
                    <textarea
                        onKeyPress={onKeyPressEnter}
                        onChange={onNewPostTextChange}
                        value={newPostText}
                    />
                </div>
                <div>
                    <button
                        className={s.sendButton}
                        onClick={onAddPostClick}
                    > Send
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;