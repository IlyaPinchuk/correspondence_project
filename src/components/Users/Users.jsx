import React, {useEffect} from "react";
import classes from "./Users.module.scss";
import Avatar from "../common/Avatar/Avatar";
import userPhoto from "../../assets/no-photo.png";
import Button from "../common/Button/Button";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {follow, requestUsers, setCurrentPage, unFollow} from "./Redux/action";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./Redux/usersSelector";
import Loader from "../common/Loader/Loader";
import {setFriend} from "../Navbar/Redux/action";

const Users = () => {
    const dispatch = useDispatch();
    const {users, pageSize, totalUsersCount, currentPage, isLoading, followingInProgress} = useSelector((state) => ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }))
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i === 10) break
    }
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

    const onPageChanged = (page) => {
        dispatch(requestUsers(page, pageSize));
        dispatch(setCurrentPage(page));
    };
    if (isLoading) {
        return <Loader/>
    }
    const followed = (userId, user) => {
        dispatch(follow(userId));
        dispatch(setFriend(user))
    }

    return (<div>
            {users.map(u => <div key={u.id} className={classes.wrapperUser}>
                <div className={classes.UserInfoWrap}>
                    <div className={classes.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <Avatar avatar={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>
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
                <div className={classes.wrapperButton}>{
                    u.followed
                        ? <Button disabled={followingInProgress.some(id => id === u.id)}
                                  onClick={()=>dispatch(unFollow(u.id))} name='Un follow'/>
                        : <Button disabled={followingInProgress.some(id => id === u.id)}
                                  onClick={() => followed(u.id,u)} name='Follow'/>
                }
                </div>
            </div>)}
            <div className={classes.pagination}>
                {pages.map(p => <Pagination
                    key={p} currentPage={currentPage}
                    onClick={() => {
                        onPageChanged(p);
                    }} pageNumber={p}
                />)}
            </div>
        </div>
    )
};

export default Users;