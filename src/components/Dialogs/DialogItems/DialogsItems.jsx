import React from "react";
import classes from "./DialogsItems.module.scss";
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.id}>
                <div className={classes.itemLogo}>
                    <img src={props.img} alt=""/>
                </div>
                {props.name}</NavLink>
        </div>
    )
}
export default DialogsItems