import React, {useEffect} from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import {useNavigate} from 'react-router-dom'
import {onMessageChange, sendMessage} from "./Redux/action";
import {useDispatch, useSelector} from "react-redux";


const Dialogs = () => {
    const {dialogsPage, isAuth, newMessage} = useSelector((state) => ({
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }));
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuth) return navigate('../login')
    }, [isAuth]);

    const onChange = (e) => dispatch(onMessageChange(e.target.value));
    const postMessage = () => dispatch(sendMessage());

    return (
        <div className={classes.wrapperDialogs}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>
                    {dialogsPage.dialogs.map(d => <DialogsItems name={d.name} id={d.id} key={d.id} img={d.img}/>)}
                </div>
                <div className={classes.message}>
                    {dialogsPage.messages.map(m => <Massage message={m.message} key={m.id}/>)}
                </div>
            </div>
            <div className={classes.chatInput}>
                <Input placeholder='Enter message' onChange={onChange} value={newMessage}/>
                <Button onClick={postMessage} src='https://cdn-icons-png.flaticon.com/512/561/561226.png'/>
            </div>
        </div>

    )
}
export default Dialogs