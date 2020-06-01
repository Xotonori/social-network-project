import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {

    return (
        <React.Fragment>
            <ProfileInfo/>
            <MyPostsContainer />
        </React.Fragment>
    );
};

export default Profile;