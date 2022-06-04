import React from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";

const Dialogs = (props) => {
    let dialogElemets = props.state.dialogsPage.dialogs.map(dialog => (
        <DialogsItems name={dialog.name} id={dialog.id} img={dialog.img}/>
    ))

    let messageElemets = props.state.dialogsPage.messages.map(message => (
        <Massage message={message.message}/>
    ))
 let newSms = React.createRef();
    let addSms = () => {
        let text = newSms.current.value;
        alert(text)
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
                <div>
                    <input ref={newSms}/>
                    <button onClick={addSms}>Send</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs