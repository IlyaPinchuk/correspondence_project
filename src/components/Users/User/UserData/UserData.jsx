import classes from "../User.module.scss";
import React from "react";

const UserData = ({name,status}) => {
    return (
        <div className={classes.wrappInfo}>
            <span className={classes.name}>{name}</span>
            <span className={classes.status}>{status}</span>
            <div className={classes.wrapLocation}>
                <span>{"u.location.country"} </span>
                <span>{"u.location.city"} </span>
            </div>
        </div>
    )
};

export default UserData;