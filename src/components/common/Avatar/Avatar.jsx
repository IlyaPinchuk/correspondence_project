import classes from "./Aavatar.module.scss";
import userPhoto from "../../../assets/no-photo.png";

const Avatar = ({avatar}) => {
    return (
        <img className={classes.imgAvtar} src={avatar || userPhoto} alt=""/>
    )
}
export default Avatar;