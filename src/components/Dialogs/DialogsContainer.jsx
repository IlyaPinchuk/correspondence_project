import React from "react";
import { onMessageChange, sendMessage} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const DialogsContainer = connect(mapStateToProps, {sendMessage,onMessageChange}) (Dialogs);

export default DialogsContainer