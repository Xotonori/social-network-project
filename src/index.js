import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

let state = {
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
    ],
    posts: [
        {
            id: 1,
            person: 'man',
            message: 'Hey, why nobody loves me?',
            likesCount: 1
        },
        {
            id: 1,
            person: 'woman',
            message: 'Hey, why nobody loves me?',
            likesCount: 17
        },
        {
            id: 1,
            person: 'man',
            message: 'Hey, why nobody loves me?',
            likesCount: 11
        },
        {
            id: 1,
            person: 'woman',
            message: 'Hey, why nobody loves me?',
            likesCount: 3
        },
        {
            id: 1,
            person: 'woman',
            message: 'Hey, why nobody loves me?',
            likesCount: 14
        },

    ],
};

ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
