import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import backImg from "../../assets/backImg.jpg";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, isOwner} from "./Redux/action";
import MyPosts from "./MyPosts/MyPosts";
import Loader from "../common/Loader/Loader";

const Profile = () => {

    let navigate = useNavigate();
    const {userId} = useParams();
    const dispatch = useDispatch();
    const {profilePage, auth} = useSelector((state) => ({
        profilePage: state.profilePage,
        auth: state.auth,
    }));


    useEffect(() => {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    }, []);

    useEffect(() => {
        if (auth.isAuth) {
            dispatch(isOwner(userId == auth.userId))
        }
    }, [auth.isAuth]);

    useEffect(() => {
        if (!auth.isAuth) {
            navigate('../login')
        }
    }, [auth.isAuth]);

    if (!profilePage.profile) {
        return <Loader/>
    }

    return (
        <div className={classes.content}>
            <div className={classes.backgroundImg} style={{backgroundImage: `url(${backImg})`}}></div>
            <div className={classes.profile}>
                <ProfileInfo profilePage={profilePage}/>
                <MyPosts profilePage={profilePage}/>
            </div>
        </div>
    )
}
export default Profile;