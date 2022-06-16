import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import backImg from "../../assets/backImg.jpg";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "./Redux/action";
import MyPosts from "./MyPosts/MyPosts";
import Loader from "../common/Loader/Loader";

const Profile = () => {

    let navigate = useNavigate();
    const {userId} = useParams();
    const dispatch = useDispatch();
    const {profile, isAuth} = useSelector((state) => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }));

    useEffect(() => {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId))
    }, [userId]);

    useEffect(() => {
        if (!isAuth) {
            navigate('../login')
        }
    }, [isAuth]);

    if (!profile) {
        return <Loader/>
    }
    return (
        <div className={classes.content}>
            <div className={classes.backgroundImg} style={{backgroundImage: `url(${backImg})`}}></div>
            <div className={classes.profile}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;