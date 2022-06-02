import classes from "./BackgroundImage.module.css";
import MyPosts from "../MyPosts/MyPosts";

const BackgroundImage = (props) => {
    return (
        <div className={classes.imgWrapepr}>
            <img
                src={props.src}
                alt=""/>
        </div>
    )
}
export default BackgroundImage