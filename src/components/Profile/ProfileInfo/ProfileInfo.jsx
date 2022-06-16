import classes from "./ProfileInfo.module.scss";
import Avatar from "../../common/Avatar/Avatar";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {updatePhoto} from "../Redux/action";


const ProfileInfo = () => {
    const dispatch = useDispatch();
    const {photos, fullName, contacts, status} = useSelector((state) => ({
        photos: state.profilePage.profile.photos.small,
        fullName: state.profilePage.profile.fullName,
        contacts: state.profilePage.profile.contacts,
        status: state.profilePage.status

    }));
    const photoSelected = (e) => {
        dispatch(updatePhoto(e.target.files[0]))
    }
    return (
        <div className={classes.wrapperProfile}>
            <Avatar avatar={photos}/>
            <label htmlFor='add-photo' className={classes.addFile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxd0g7pbHfsMKuzrDZNy9bqcl4AWOdEEWt2Q&usqp=CAU" alt=""/>
            </label>
            <input id='add-photo' type="file"  onChange={photoSelected}/>
            <div className={classes.wrapperName}><span>{fullName}</span></div>
            <ProfileStatus status={status}/>
            <div className={classes.contacts}>
                <a href={contacts.facebook}>Facebook </a>
                <a href={contacts.twitter}>twitter </a>
                <a href={contacts.instagram}>instagram </a>
                <a href={contacts.github}>github </a>
            </div>
        </div>
    )
}
export default ProfileInfo