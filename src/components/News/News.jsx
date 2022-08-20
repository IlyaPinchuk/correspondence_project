import React from "react";
import classes from "./News.module.scss";
import NewsItem from "./NewsItem/NewsItem";
import {useSelector} from "react-redux";

const News = () => {
    const {newsPage} = useSelector((state) => ({
        newsPage: state.newsPage
    }))
    let date = new Date();
    return (
        <div className={classes.wrapperNews}>
            {newsPage.news.map(n => <NewsItem key={n.id} news={n.urlNews} src={n.src} title={n.title}/>)}

        </div>
    )
}
export default News