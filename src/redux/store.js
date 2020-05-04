let store = {
    _callback(){},

    subscribe(func) {
        this._callback = func;
    },

    _state: {

        profilePage: {
            posts: [
                {id: 1, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 1},
                {id: 2, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 17},
                {id: 3, person: 'man', message: 'Hey, why nobody loves me?', likesCount: 11},
                {id: 4, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 3},
                {id: 5, person: 'woman', message: 'Hey, why nobody loves me?', likesCount: 14},
            ]
        },

        dialogsPage: {
            comrades: [
                {name: 'Dimych', id: 1},
                {name: 'Andrey', id: 2},
                {name: 'Sveta', id: 3},
                {name: 'Viktor', id: 4},
                {name: 'Peter', id: 5},
                {name: 'Vasily', id: 6},
                {name: 'Valera', id: 7},
            ],
            dialogs: [
                {
                    messages: [
                        {id: 1, message: 'Hi!'},
                        {id: 2, message: 'Good bye!'},
                        {id: 3, message: 'What is your problem?'},
                    ]
                },
                {
                    messages: [
                        {id: 1, message: 'Hi!'},
                        {id: 2, message: 'Good bye!'},
                        {id: 3, message: 'What is your problem?'},
                    ]
                },
                {
                    messages: [
                        {id: 1, message: 'Hi!'},
                        {id: 2, message: 'Good bye!'},
                        {id: 3, message: 'What is your problem?'},
                    ]
                },
            ]
        },

    },

    getState() {
        return this._state;
    },

    addPost(postText) {
        this._state.profilePage.posts.push({
            id: this._state.profilePage.posts.length + 1,
            person: 'man',
            message: postText,
            likesCount: 0
        });
        this._callback();
    },

};


export default store;