import React from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";
import Button from "../Profile/MyPosts/Button/Button";
import TextArea from "../Profile/MyPosts/TextArea/TextArea";
import {newMessageActionCreator, sendMessageActionCreator} from "../Redux/state";

const Dialogs = (props) => {

    let dialogElemets = props.dialogsPage.dialogs.map(dialog => (
        <DialogsItems name={dialog.name} id={dialog.id} img={dialog.img}/>
    ))

    let messageElemets = props.dialogsPage.messages.map(message => (
        <Massage message={message.message}/>
    ))

    let newTextMessage = React.createRef()


    let sendMassage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newTextMessage.current.value
        props.dispatch(newMessageActionCreator(text))

    }


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
            <div className={classes.chatInput}>
                <TextArea
                    innerRef={newTextMessage}
                    placeholder='Enter message'
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessage}/>
                <Button onClick={sendMassage} src='https://cdn-icons-png.flaticon.com/512/561/561226.png'/>
            </div>
        </div>

    )
}
export default Dialogs