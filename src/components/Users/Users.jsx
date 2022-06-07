import React from "react";
import Avatar from "../Profile/Avatar/Avatar";
import Button from "../Profile/MyPosts/Button/Button";
import classes from "./Users.module.scss";
import axios from "axios";
import userPhoto from  "../../icons/no-photo.png"

let Users = (props) => {
    return <div>
        {
            props.users.map(u =>
                <div key={u.id} className={classes.wrapperUser}>
                    <div className={classes.UserInfoWrap}>
                        <div className={classes.userPhoto}>
                            <Avatar avatar={
                                u.photos.small != null
                                    ? u.photos.small
                                    : userPhoto}/>
                        </div>
                        <div className={classes.wrappInfo}>
                            <span className={classes.name}>{u.name}</span>
                            <span className={classes.status}>{u.status}</span>
                            <div className={classes.wrapLocation}>
                            <span>{"u.location.country"} </span>
                            <span>{"u.location.city"} </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.wrapperButton}>{u.followed
                        ? <Button onClick={() => props.unFollow(u.id)} name='Un follow'/>
                        : <Button onClick={() => props.follow(u.id)} name='Follow'/>}
                    </div>
                </div>
            )}
    </div>
}

export default Users