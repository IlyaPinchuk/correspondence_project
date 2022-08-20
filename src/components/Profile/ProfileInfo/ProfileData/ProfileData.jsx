import classes from "../ProfileInfo.module.scss";
import React from "react";
import Contacts from "../Contacts/Contacts";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileData = ({profilePage, goToEditMode}) => {
    return (
        <div>
            {profilePage.isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div className={classes.wrapperName}><span>{profilePage.profile.fullName}</span></div>
            <ProfileStatus profileStatus={profilePage.status}/>
            <div> Looking for a job: {profilePage.profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profilePage.profile.lookingForAJob && <div> {profilePage.profile.lookingForAJobDescription}</div>}
            <div>{profilePage.profile.aboutMe}</div>
            <div className={classes.contacts}>
                {(Object.keys(profilePage.profile.contacts).map(c => {
                        return <Contacts key={c} contactTitle={c} contactValue={profilePage.profile.contacts[c]}/>
                    }
                ))}
            </div>
        </div>
    )
};
export default ProfileData;