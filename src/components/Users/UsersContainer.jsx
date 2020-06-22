import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    setCurrentPage,
    setTotalCountUsers,
    setUsers,
    unfollow, isToggleFetching
} from "../../redux/reducers/usersReducer";
import axios from 'axios';
import {ROOT_URL} from "../../redux/reduxStore";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isToggleFetching(true);
        axios.get(`${ROOT_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
                this.props.isToggleFetching(false);
            });
    }

    onPageChanged = pageNumber => {
        this.props.isToggleFetching(true);
        axios.get(`${ROOT_URL}/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(pageNumber);
                this.props.isToggleFetching(false);
            })
    };

    render() {
        return (
            <Users
                totalCountUsers={this.props.totalCountUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, isToggleFetching,
})(UsersContainer);