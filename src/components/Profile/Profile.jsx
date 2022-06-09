import classes from "./Profile.module.scss";
import ProfileInfo from "./Wallpapper/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import backImg from "../../assets/backImg.jpg";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.backgroundImg} style={{ backgroundImage: `url(${backImg})` }}></div>
            <div className={classes.profile}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile