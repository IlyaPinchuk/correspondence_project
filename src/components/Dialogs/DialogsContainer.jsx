import React from "react";
import {newMessageActionCreator, sendMessageActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMassage: () => { dispatch(sendMessageActionCreator());},
        onMessageChange: (text) => { dispatch(newMessageActionCreator(text))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer