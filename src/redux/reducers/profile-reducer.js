import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../typesOfActions/typeOfActions";

const profileReducer = (state, action) => {

    switch (action.type) {

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        case ADD_POST:
            state.posts.push({
                id: state.posts.length + 1,
                person: 'man',
                message: state.newPostText,
                likesCount: 0
            });
            state.newPostText = '';
            return state;

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
