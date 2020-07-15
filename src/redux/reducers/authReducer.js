import {authAPI} from "../../api/api";

const SET_USER_DATA_SUCCESS = 'authReducer/SET_USER_DATA_SUCCESS';
const IS_TOGGLE_AUTH_SUCCESS = 'authReducer/IS_TOGGLE_AUTH_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA_SUCCESS: {
            return {
                ...state,
                ...action.data
            };
        }

        case IS_TOGGLE_AUTH_SUCCESS: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        default:
            return state;
    }
};

export const setAuthUserDataSuccess = (userId, email, login) => ({type: SET_USER_DATA_SUCCESS, data: {userId, email, login}});
export const isToggleAuthSuccess = (isAuth) => ({type: IS_TOGGLE_AUTH_SUCCESS, isAuth});


export const setAuthUserData = () => (dispatch, getState) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserDataSuccess(id, email, login));
                dispatch(isToggleAuthSuccess(true));
            }
        });
};

export default authReducer;
