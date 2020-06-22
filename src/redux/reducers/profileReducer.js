const UPDATE_NEW_POST_TEXT = 'profileReducer/UPDATE_NEW_POST_TEXT';
const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const IS_TOGGLE_FETCHING = 'profileReducer/IS_TOGGLE_FETCHING';

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
    isFetching: true
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

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
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

export const updateNewPostTextCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: newText
});

export const addPostCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching});

export default profileReducer;
