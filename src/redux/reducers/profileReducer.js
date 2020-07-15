import {profileAPI} from "../../api/api";

const UPDATE_NEW_POST_TEXT = 'profileReducer/UPDATE_NEW_POST_TEXT';
const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE_SUCCESS = 'profileReducer/SET_USER_PROFILE_SUCCESS';
const IS_TOGGLE_FETCHING_SUCCESS = 'profileReducer/IS_TOGGLE_FETCHING_SUCCESS';
const SET_STATUS_SUCCESS = 'profileReducer/SET_STATUS_SUCCESS';
// const UPDATE_STATUS_SUCCESS = 'profileReducer/UPDATE_STATUS_SUCCESS';

let initialState = {
    posts: [
        {id: 1, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 1},
        {id: 2, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 17},
        {id: 3, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 11},
        {id: 4, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 3},
        {id: 5, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 14},
    ],
    newPostText: '',
    profile: null,
    isFetching: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }

        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: state.posts.length + 1,
                        person: 'man',
                        message: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            };
        }

        case SET_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case IS_TOGGLE_FETCHING_SUCCESS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case SET_STATUS_SUCCESS: {
            return {
                ...state,
                status: action.status
            }
        }

        // case UPDATE_STATUS_SUCCESS: {
        //     return {
        //         ...state,
        //         status: action.status
        //     }
        // }

        default:
            return state;
    }
};

export const updateNewPostTextCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: newText
});

export const addPostCreator = () => ({type: ADD_POST});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE_SUCCESS, profile});
export const isToggleFetchingSuccess = (isFetching) => ({type: IS_TOGGLE_FETCHING_SUCCESS, isFetching});
export const setStatusSuccess = (status) => ({type: SET_STATUS_SUCCESS, status});

export default profileReducer;


//Thunk

export const setUserProfile = (userId) => (dispatch, getStore) => {
    dispatch(isToggleFetchingSuccess(true));

    profileAPI.setUserProfile(userId)
        .then(data => {
            dispatch(setUserProfileSuccess(data));
            dispatch(isToggleFetchingSuccess(false));
        })
        .catch(error => {
            console.log(error)
        })
};

export const getUserStatus = (userId) => (dispatch, getStore) => {

    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatusSuccess(data));
        })
        .catch(error => {
            console.log(error)
        })
};

export const updateUserStatus = (status) => (dispatch, getStore) => {

    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatusSuccess(status));
            }
        })
        .catch(error => {
            console.log(error)
        })
};
