import React from 'react'
import s from './Dialogs.module.css'
import Friend from "./Friend/Friend";
import Message from "./Message/Message";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/reducers/dialogs-reducer";

const Dialogs = props => {

    let friendsElements = props.dialogsPage.friends.map((f) => <Friend name={f.name} id={f.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id}/>);
    let newMessageText = props.dialogsPage.newMessageText;

    let onNewMessageTextChange = (e) => {
        let newText = e.target.value;
        props.dispatch(updateNewMessageTextCreator(newText))
    };

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    let onKeyPressEnter = (e) => {
        if(e.key === 'Enter') {
            onSendMessageClick();
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.friends}>
                { friendsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea
                            placeholder={'Enter your message'}
                            onKeyPress={onKeyPressEnter}
                            onChange={onNewMessageTextChange}
                            value={newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;