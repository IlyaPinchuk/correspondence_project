import React from "react";
import classes from "./NewsItem.module.scss";

const NewsItem = (props) => {
    return (
        <div className={classes.News}>
            {props.testtext}
            {props.num}
        </div>
    )
}
export default NewsItem