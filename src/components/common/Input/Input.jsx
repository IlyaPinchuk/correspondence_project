import classes from "./Input.module.scss";
import React from "react";

const Input = (props) => {

    return (
        <div className={classes.wrapperArea}>
            <input
                autoFocus={true}
                onBlur={props.onBlur}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}/>
        </div>
    )
}
export default Input