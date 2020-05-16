import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";


const MyPosts = props => {

    let onChangePostText = (e) => {
        props.dispatch(updateNewPostTextActionCreator(e))
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onKeyPress = (e) => {
        if(e.key === 'Enter') {
            addPost();
        }
    };

    return (
        <div className={s.wrapPosts}>
            <div className={s.myPost}>
                <h3>My posts</h3>
                <div>
                    <textarea
                        onKeyPress={onKeyPress}
                        onChange={onChangePostText}
                        name="newPostText"
                        id="newPostText"
                        cols="30"
                        rows="10"
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button
                        className={s.sendButton}
                        onClick={addPost}
                    > Send
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(
                    post => <Post person={post.person}
                               message={post.message}
                               like={post.likesCount}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;