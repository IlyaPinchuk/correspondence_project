import classes from "./Aavatar.module.scss";


const Avatar = (props) => {
    return (
        <div className={classes.avatar}>
            <img src={props.avatar} alt=""/>
        </div>

    )
}
export default Avatar