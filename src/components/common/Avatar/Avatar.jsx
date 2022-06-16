import classes from "./Aavatar.module.scss";
import userPhoto from "../../../assets/no-photo.png";

const Avatar = (props) => {
    return (
        <img className={classes.imgAvtar} src={props.avatar || userPhoto} alt=""/>
    )
}
export default Avatar