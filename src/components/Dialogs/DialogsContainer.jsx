import React from 'react'
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {

    let state = props.store.getState();

    let updateMessageText = (newText) => {
        props.store.dispatch(updateNewMessageTextCreator(newText))
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    return <Dialogs
        friends={state.dialogsPage.friends}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
        updateMessageText={updateMessageText}
        sendMessage={sendMessage}
    />
};

export default DialogsContainer;