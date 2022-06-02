import React from "react";
import classes from "./Massage.module.scss";

const Massage = (props) => {
    return (
      <div className={classes.massage}>
          {props.massage}
      </div>
    )
}
export default Massage