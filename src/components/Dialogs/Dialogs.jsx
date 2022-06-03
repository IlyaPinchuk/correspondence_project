import React from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let messageElemets = props.messageData.map(message => <Massage message={message.message}/>)
    let dialogElemets = props.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id}/>)


    return (
        <div className={classes.wrapperDialogs}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>
                    {dialogElemets}
                </div>
                <div className={classes.message}>
                    {messageElemets}
                </div>

            </div>
        </div>

    )
}
export default Dialogs