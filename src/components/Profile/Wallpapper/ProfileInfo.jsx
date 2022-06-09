import classes from "./ProfileInfo.module.scss";
import Avatar from "../Avatar/Avatar";
import Loader from "../../common/Loader/Loader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }

    return (
        <div className={classes.wrapperProfile}>
            <div className={classes.wrapperUserInfo}>
                <Avatar avatar={props.profile.photos.small}/>
                <div className={classes.wrapperName}><span>{props.profile.fullName}</span></div>
                <div className={classes.AboutMe}><span>{props.profile.aboutMe}</span></div>
                <div className={classes.contacts}>
                    <a href={props.profile.contacts.facebook}>Facebook </a>
                    <a href={props.profile.contacts.twitter}>twitter </a>
                    <a href={props.profile.contacts.instagram}>instagram </a>
                    <a href={props.profile.contacts.github}>github </a>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo