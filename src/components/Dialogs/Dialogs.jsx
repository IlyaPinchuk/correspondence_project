import React from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";
import Button from "../Profile/MyPosts/Button/Button";
import Input from "../Profile/MyPosts/TextArea/TextArea";

const Dialogs = (props) => {

    let dialogElemets = props.dialogsPage.dialogs.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} img={dialog.img}/>)

    let messageElemets = props.dialogsPage.messages.map(message => <Massage message={message.message}/>)

    let sendMassage = () => props.sendMassage()

    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }


    return (
        <div className={classes.wrapperDialogs}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>{dialogElemets}</div>
                <div className={classes.message}>{messageElemets}</div>
            </div>
            <div className={classes.chatInput}>
                <Input
                    placeholder='Enter message'
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}
                />
                <Button onClick={sendMassage} src='https://cdn-icons-png.flaticon.com/512/561/561226.png'/>
            </div>
        </div>

    )
}
export default Dialogs