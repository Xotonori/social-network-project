import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {getUserStatus, setUserProfile, updateUserStatus} from "../../redux/reducers/profileReducer";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId || '2';
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Profile {...this.props}/>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
