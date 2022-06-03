import React from "react";
import classes from "./News.module.scss";
import NewsItem from "./NewsItem/NewsItem";

const News = () => {
    return (
        <div className={classes.wrapperNews}>
            News
            <NewsItem testtext='testtestetstetst' num='12' />
            <NewsItem testtext='testtestetstetst'/>
            <NewsItem testtext='testtestetstetst'/>
            <NewsItem testtext='testtestetstetst'/>
        </div>
    )
}
export default News