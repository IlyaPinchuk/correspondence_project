import React from "react";
import {onMessageChange, sendMessage} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({dialogsPage: state.dialogsPage});
const mapDispatchToProps = () => ({sendMessage, onMessageChange});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;