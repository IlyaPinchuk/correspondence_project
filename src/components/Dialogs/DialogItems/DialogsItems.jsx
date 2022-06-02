import React from "react";
import classes from "./DialogsItems.module.scss";

const DialogsItems = (props) => {
    return (
        <div className={classes.item}>
            {props.name}
        </div>
    )
}
export default DialogsItems