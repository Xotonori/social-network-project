import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux'
import axios from "axios/index";
import {ROOT_URL} from "../../redux/reduxStore";
import {setUserProfile, isToggleFetching} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.isToggleFetching(true);
        let userId = this.props.match.params.userId || '2';
        axios.get(`${ROOT_URL}/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
            this.props.isToggleFetching(false);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Profile {...this.props}/>}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
};

export default connect(mapStateToProps, {setUserProfile, isToggleFetching})(withRouter(ProfileContainer));
