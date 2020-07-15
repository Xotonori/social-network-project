import {usersAPI} from "../../api/api";

const FOLLOW_SUCCESS = 'usersReducer/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'usersReducer/UNFOLLOW_SUCCESS';
const SET_USERS_SUCCESS = 'usersReducer/SET_USERS_SUCCESS';
const SET_TOTAL_COUNT_USERS_SUCCESS = 'usersReducer/SET_TOTAL_COUNT_USERS_SUCCESS';
const SET_CURRENT_PAGE_SUCCESS = 'usersReducer/SET_CURRENT_PAGE_SUCCESS';
const IS_TOGGLE_FETCHING_SUCCESS = 'usersReducer/IS_TOGGLE_FETCHING_SUCCESS';
const IS_TOGGLE_FOLLOWING_PROGRESS_SUCCESS = 'usersReducer/IS_TOGGLE_FOLLOWING_PROGRESS_SUCCESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    } else {
                        return user;
                    }
                })
            };
        }

        case UNFOLLOW_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    } else {
                        return user;
                    }
                })
            };
        }

        case SET_USERS_SUCCESS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_TOTAL_COUNT_USERS_SUCCESS: {
            return {
                ...state,
                totalCountUsers: action.count
            }
        }

        case SET_CURRENT_PAGE_SUCCESS: {
            return {
                ...state,
                currentPage: action.page
            }
        }

        case IS_TOGGLE_FETCHING_SUCCESS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case IS_TOGGLE_FOLLOWING_PROGRESS_SUCCESS: {
            return {
                ...state,
                isFollowingProgress:
                    action.isFetching ?
                    [...state.isFollowingProgress, action.userId] :
                    state.isFollowingProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId});
export const setUsersSuccess = (users) => ({type: SET_USERS_SUCCESS, users});
export const setTotalCountUsersSuccess = (count) => ({type: SET_TOTAL_COUNT_USERS_SUCCESS, count});
export const setCurrentPageSuccess = (page) => ({type: SET_CURRENT_PAGE_SUCCESS, page});
export const isToggleFetchingSuccess = (isFetching) => ({type: IS_TOGGLE_FETCHING_SUCCESS, isFetching});
export const isToggleFollowingProgressSuccess = (isFetching, userId) => ({type: IS_TOGGLE_FOLLOWING_PROGRESS_SUCCESS, isFetching, userId});

export default usersReducer;


//Thunks

export const setUsers = (currentPage, pageSize) => (dispatch, getStore) => {
    dispatch(isToggleFetchingSuccess(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersSuccess(data.items));
            dispatch(setTotalCountUsersSuccess(data.totalCount));
            dispatch(isToggleFetchingSuccess(false));
        })
        .catch(error => {

        })
};

export const onPageChanged = (pageNumber, pageSize) => (dispatch, getStore) => {
    dispatch(isToggleFetchingSuccess(true));

    usersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(setUsersSuccess(data.items));
            dispatch(setCurrentPageSuccess(pageNumber));
            dispatch(isToggleFetchingSuccess(false));
        })
        .catch(error => {

        })
};

export const follow = (userId) => (dispatch, getStore) => {
    dispatch(isToggleFollowingProgressSuccess(true, userId));
    usersAPI.follow(userId)
        .then(data => {
            dispatch(followSuccess(userId));
            dispatch(isToggleFollowingProgressSuccess(false, userId));
        })
        .catch(error => {

        })
};

export const unfollow = (userId) => (dispatch, getStore) => {
    dispatch(isToggleFollowingProgressSuccess(true, userId));
    usersAPI.unfollow(userId)
        .then(data => {
            dispatch(unfollowSuccess(userId));
            dispatch(isToggleFollowingProgressSuccess(false, userId));
        })
        .catch(error => {

        })
};


