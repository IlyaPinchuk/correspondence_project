import React from "react";
import classes from "./Users.module.scss";
import Avatar from "../Profile/Avatar/Avatar";
import userPhoto from "../../assets/no-photo.png";
import Button from "../Profile/MyPosts/Button/Button";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

let Users = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    //     if (i === 10) break
    // }
    return (<div>
        {props.users.map( u => <div key={u.id}>{u.id}</div>)}
        {/*{ props.users.map(u =>*/}
        {/*    <div key={u.id} className={classes.wrapperUser}>*/}
        {/*        <div className={classes.UserInfoWrap}>*/}
        {/*            <div className={classes.userPhoto}>*/}
        {/*                <NavLink to={'/profile/' + u.id}>*/}
        {/*                    <Avatar avatar={*/}
        {/*                        u.photos.small != null*/}
        {/*                            ? u.photos.small*/}
        {/*                            : userPhoto}/>*/}
        {/*                </NavLink>*/}
        {/*            </div>*/}
        {/*            <div className={classes.wrappInfo}>*/}
        {/*                <span className={classes.name}>{u.name}</span>*/}
        {/*                <span className={classes.status}>{u.status}</span>*/}
        {/*                <div className={classes.wrapLocation}>*/}
        {/*                    <span>{"u.location.country"} </span>*/}
        {/*                    <span>{"u.location.city"} </span>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={classes.wrapperButton}>{u.followed*/}
        {/*            ? <Button*/}
        {/*                disabled={props.followingInProgress.some(id => id === u.id)}*/}
        {/*                onClick={() => {*/}
        {/*                    props.toggleFollowingProgress(true, u.id)*/}
        {/*                    userAPI.unFollow(u.id).then(data => {*/}
        {/*                        if (data.resultCode === 0) {*/}
        {/*                            props.unFollow(u.id)*/}
        {/*                        }*/}
        {/*                        props.toggleFollowingProgress(false, u.id)*/}
        {/*                    })*/}
        {/*                }*/}
        {/*                } name='Un follow'/>*/}
        {/*            : <Button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {*/}
        {/*                props.toggleFollowingProgress(true, u.id)*/}
        {/*                userAPI.follow(u.id).then(data => {*/}
        {/*                    if (data.resultCode === 0) {*/}
        {/*                        props.follow(u.id)*/}
        {/*                    }*/}
        {/*                    props.toggleFollowingProgress(false, u.id)*/}
        {/*                })*/}
        {/*            }*/}
        {/*            } name='Follow'/>}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*<div className={classes.pagination}>*/}
        {/*    {pages.map(p => <span key={p} onClick={() => props.onPageChanged(p)}*/}
        {/*                          className={props.currentPage === p ? classes.selectPage : undefined}>{p}</span>)*/}
        {/*    }*/}
        {/*</div>*/}
    </div>)

}

export default Users