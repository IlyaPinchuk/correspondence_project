import React from "react";
import classes from "./Users.module.scss";
import Avatar from "../Profile/Avatar/Avatar";
import userPhoto from "../../icons/no-photo.png";
import Button from "../Profile/MyPosts/Button/Button";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
            this.props.setTotalUsersCount(r.data.totalCount)
        })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPageAC(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if (i === 10 ) break
        }
        return <div>

            {
                this.props.users.map(u =>
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
                            ? <Button onClick={() => this.props.unFollow(u.id)} name='Un follow'/>
                            : <Button onClick={() => this.props.follow(u.id)} name='Follow'/>}
                        </div>
                    </div>
                )}
            <div className={classes.pagination}>
                {pages.map(p => {
                    return <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p && classes.selectPage}>{p}</span>
                })
                }
            </div>
        </div>
    }
}

export default Users