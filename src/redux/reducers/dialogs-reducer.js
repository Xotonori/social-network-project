import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../typesOfActions/typeOfActions";

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;

        case SEND_MESSAGE:
            state.messages.push({
                id: state.messages.length + 1,
                message: state.newMessageText,
            });
            state.newMessageText = '';
            return state;

        default:
            return state;
    }
};

export const updateNewMessageTextCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: newText
});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;
