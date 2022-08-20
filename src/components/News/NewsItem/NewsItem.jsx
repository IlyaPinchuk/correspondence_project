    import React from "react";
    import classes from "./NewsItem.module.scss";

    const NewsItem = ({src, news, title}) => {
        return (
            <div className={classes.News}>
                <div>
                    <h3><a href={news}>{title}</a></h3>
                    <time className="hvbAAd" dateTime="2022-08-19T06:49:11Z"></time>
                </div>
                <a className={classes.photoNews} href={news}><img src={src} alt=""/></a>
            </div>
        )
    }
    export default NewsItem