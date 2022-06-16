import React from "react";
import classes from "./User.module.scss";
import userPhoto from "../../../assets/no-photo.png";
import Button from "../../common/Button/Button";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {follow, unFollow} from "../Redux/action";
import Avatar from "../../common/Avatar/Avatar";
import UserData from "./UserData/UserData";


const User = ({user, followingInProgress}) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.wrapperUser}>
            <div className={classes.UserInfoWrap}>
                <div className={classes.userPhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <Avatar avatar={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <UserData name={user.name} status={user.status}/>
            </div>
            <div className={classes.wrapperButton}>
                {user.followed
                    ? <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => dispatch(unFollow(user.id))} name='Un follow'/>
                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => dispatch(follow(user.id))} name='Follow'/>
                }
            </div>
        </div>
    )
};

export default User;