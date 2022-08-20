import React from "react";
import classes from "./DialogsItems.module.scss";
import {NavLink} from "react-router-dom";

const DialogsItems = ({id, img, name}) => {
    return (
        <div className={classes.item}>
            <NavLink to={id}>
                <div className={classes.itemLogo}>
                    <img src={img} alt=""/>
                </div>
                {name}</NavLink>
        </div>
    )
}
export default DialogsItems