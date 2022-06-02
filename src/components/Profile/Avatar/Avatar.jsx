import classes from "./Aavatar.module.css";


const Avatar = (props) => {
    return (
        <div className={classes.avatar}>
            <img src={props.avatar} alt=""/>
        </div>

    )
}
export default Avatar