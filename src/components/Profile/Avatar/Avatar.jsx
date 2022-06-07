import classes from "./Aavatar.module.scss";


const Avatar = (props) => {
    return (
            <img className={classes.imgAvtar} src={props.avatar} alt=""/>

    )
}
export default Avatar