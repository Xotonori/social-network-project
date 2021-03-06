import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = dispatch => {
    return {
        updatePostText: newText => {
            dispatch(updateNewPostTextCreator(newText))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;