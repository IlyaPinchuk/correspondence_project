import classes from "./Profile.module.scss";
import BackgroundImage from "./Wallpapper/BackgroundImage";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <BackgroundImage src='https://cdn5.f-cdn.com/contestentries/1533674/20850863/5d2bac5b60bd2_thumb900.jpg'/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile