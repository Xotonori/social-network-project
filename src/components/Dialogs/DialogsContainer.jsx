import React from 'react'
import {updateMessageText, sendMessage} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
})

export default compose(
    connect(mapStateToProps, {updateMessageText, sendMessage}),
    WithAuthRedirect
)(Dialogs);
