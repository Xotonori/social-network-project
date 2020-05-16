const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 1},
                {id: 2, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 17},
                {id: 3, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 11},
                {id: 4, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 3},
                {id: 5, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 14},
            ],
            newPostText: '',
        },
        dialogsPage: {
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

        },
    },

    _subscriber() {
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.value;
            this._subscriber();
        }
        else if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length + 1,
                person: 'man',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            });
            this._state.profilePage.newPostText = '';
            this._subscriber();
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.value;
            this._subscriber();
        }
        else if (action.type === SEND_MESSAGE) {
            this._state.dialogsPage.messages.push({
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
            });
            this._state.dialogsPage.newMessageText = '';
            this._subscriber();
        }

    },

};

export const updateNewPostTextActionCreator = (e) => ({
    type: UPDATE_NEW_POST_TEXT,
    value: e.currentTarget.value
});

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewMessageTextActionCreator = (e) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    value: e.currentTarget.value
});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});



export default store;