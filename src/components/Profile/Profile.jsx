import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = props => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </>
    );
};

export default Profile;