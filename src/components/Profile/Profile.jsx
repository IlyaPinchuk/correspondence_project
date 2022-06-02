import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import BackgroundImage from "./backgroundImage/BackgroundImage";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div className={classes.content}>
            <BackgroundImage src='https://cdn5.f-cdn.com/contestentries/1533674/20850863/5d2bac5b60bd2_thumb900.jpg'/>
            <Avatar avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2-mguQ0xN80EZlubSKAE6lv7mn2FJAaX7ctVVkxFBRcf3D3GEHrp3izv0TL9GfK8dN8&usqp=CAU'/>
            <MyPosts/>
        </div>
    )
}
export default Profile