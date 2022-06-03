import classes from "./BackgroundImage.module.scss";

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