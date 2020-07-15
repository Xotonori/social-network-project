import React from 'react'
import {connect} from 'react-redux'
import {follow, onPageChanged, setUsers, unfollow} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Users {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress,
});

export default compose(
    connect(mapStateToProps, {follow, unfollow, setUsers, onPageChanged}),
    WithAuthRedirect
)(UsersContainer);