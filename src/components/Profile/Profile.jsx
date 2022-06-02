import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.imgWrapepr}>
                <img
                    src="https://cdn5.f-cdn.com/contestentries/1533674/20850863/5d2bac5b60bd2_thumb900.jpg"
                    alt=""/>
            </div>
            <div>
                ava
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile