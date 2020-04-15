import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
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
                id: 1,
                messages: [
                    {id: 1, message: 'Hi!'},
                    {id: 2, message: 'Good bye!'},
                    {id: 3, message: 'What is your problem?'},
                ]
            },
            {
                id: 2,
                messages: [
                    {id: 1, message: 'Hi!'},
                    {id: 2, message: 'Good bye!'},
                    {id: 3, message: 'What is your problem?'},
                ]
            },
            {
                id: 3,
                messages: [
                    {id: 1, message: 'Hi!'},
                    {id: 2, message: 'Good bye!'},
                    {id: 3, message: 'What is your problem?'},
                ]
            },
        ],


    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.comrades.map((c) => <Dialog name={c.name} id={c.id}/>)}
            </div>
            <div className={s.messages}>
                {state.dialogs[0].messages.map((m) => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;