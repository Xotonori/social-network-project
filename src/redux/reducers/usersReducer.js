const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_TOTAL_COUNT_USERS = 'usersReducer/SET_TOTAL_COUNT_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const IS_TOGGLE_FETCHING = 'usersReducer/IS_TOGGLE_FETCHING';

let initialState = {
    users: [],
    pageSize: 20,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
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

        case UNFOLLOW: {
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

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_TOTAL_COUNT_USERS: {
            return {
                ...state,
                totalCountUsers: action.count
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }

        case IS_TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching});

export default usersReducer;
