const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const IS_TOGGLE_AUTH = 'authReducer/IS_TOGGLE_AUTH';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }

        case IS_TOGGLE_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const isToggleAuth = (isAuth) => ({type: IS_TOGGLE_AUTH, isAuth});

export default authReducer;
