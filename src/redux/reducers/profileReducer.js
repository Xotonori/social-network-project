const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
        {id: 1, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 1},
        {id: 2, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 17},
        {id: 3, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 11},
        {id: 4, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 3},
        {id: 5, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 14},
    ],
    newPostText: '',
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
        default:
            return state;
    }
};

export const updateNewPostTextCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: newText
});

export const addPostCreator = () => ({type: ADD_POST});

export default profileReducer;
