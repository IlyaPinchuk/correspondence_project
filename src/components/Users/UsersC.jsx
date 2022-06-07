import React from "react";
import classes from "./Users.module.scss";
import Avatar from "../Profile/Avatar/Avatar";
import userPhoto from "../../icons/no-photo.png";
import Button from "../Profile/MyPosts/Button/Button";
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://reqres.in/api/users?page").then(r => {
            this.props.setUsers(r.data.data)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id} className={classes.wrapperUser}>
                        <div className={classes.UserInfoWrap}>
                            <div className={classes.userPhoto}>
                                <Avatar avatar={
                                    u.avatar != null
                                        ? u.avatar
                                        : userPhoto}/>
                            </div>
                            <div className={classes.wrappInfo}>
                                <span className={classes.name}>{u.first_name + ' ' + u.last_name}</span>
                                <span className={classes.status}>{u.status}</span>
                                <div className={classes.wrapLocation}>
                                    <span>{u.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.wrapperButton}>{u.followed
                            ? <Button onClick={() => this.props.unFollow(u.id)} name='Un follow'/>
                            : <Button onClick={() => this.props.follow(u.id)} name='Follow'/>}
                        </div>
                    </div>
                )}
        </div>
    }
}

export default Users