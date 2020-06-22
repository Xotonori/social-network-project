const UPDATE_NEW_MESSAGE_TEXT = 'dialogsReducer/UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'dialogsReducer/SEND_MESSAGE';

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Peter'},
        {id: 6, name: 'Vasily'},
        {id: 7, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Good bye!'},
        {id: 3, message: 'What is your problem?'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            };
        }

        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,
                    {
                        id: state.messages.length + 1,
                        message: state.newMessageText,
                    },
                ],
                newMessageText: ''
            };
        }

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
