import React from "react";
import classes from "./Massage.module.scss";

const Massage = ({message}) => {
    return (
      <div className={classes.massage}>
          {message}
      </div>
    )
}
export default Massage