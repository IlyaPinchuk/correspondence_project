import classes from "./ProfileInfo.module.scss";
import Avatar from "../../common/Avatar/Avatar";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {updatePhoto} from "../Redux/action";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {AiOutlineCamera} from "react-icons/ai";


const ProfileInfo = ({profilePage}) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const photoSelected = (e) => {
        dispatch(updatePhoto(e.target.files[0]))
    }
    return (
        <div className={classes.wrapperProfile}>
            <Avatar avatar={profilePage.profile.photos.small}/>
            {profilePage.isOwner &&
                <label htmlFor='add-photo' className={classes.addFile}>
                    <AiOutlineCamera/>
                </label>}
            <input id='add-photo' type="file" onChange={photoSelected}/>
            {editMode
                ? <ProfileDataForm profile={profilePage.profile} status={profilePage.status} goToEditMode={() => setEditMode(false)}/>
                : <ProfileData profilePage={profilePage}  goToEditMode={() => setEditMode(true)}/>

            }

        </div>
    )
}
export default ProfileInfo