import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {

    let state = props.store.getState();

    let updatePostText = (newText) => {
        props.store.dispatch(updateNewPostTextCreator(newText))
    };

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    return <MyPosts
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        updatePostText={updatePostText}
        addPost={addPost}
    />
};

export default MyPostsContainer;