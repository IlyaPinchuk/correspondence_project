import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import {useDispatch} from "react-redux";
import {addPost, onPostChange} from "../Redux/action";

const MyPosts = ({profilePage}) => {
    const dispatch = useDispatch();
    const setPost = () => dispatch(addPost());
    const onChange = (e) => dispatch(onPostChange(e.currentTarget.value));

    return (
        <div>
            <div className={classes.wrapperMyPost}>
                <div className={classes.wrapperInput}>
                    <h4 className={classes.postTitle}>My post</h4>
                    <Input value={profilePage.newPostText} onChange={onChange}/>
                    <Button name="Add post" onClick={setPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {profilePage.posts.map(p => <Post key={p.id} count={p.count} message={p.message} img={p.img}/>)}
            </div>
        </div>
    )
};

export default MyPosts;