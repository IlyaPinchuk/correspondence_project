import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addPost, onPostChange} from "../Redux/action";

const MyPosts = () => {

    const dispatch = useDispatch();
    const {posts, newPostText} = useSelector((state) => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }));
    const setPost = () => dispatch(addPost());

    const onChange = (e) => dispatch(onPostChange(e.currentTarget.value));

    return (
        <div>
            <div className={classes.wrapperMyPost}>
                <div className={classes.wrapperInput}>
                    <h4 className={classes.postTitle}>My post</h4>
                    <Input value={newPostText} onChange={onChange}/>
                    <Button name="Add post" onClick={setPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {posts.map(p => <Post message={p.message} count={p.count} key={p.id} img={p.img}/>)}
            </div>
        </div>

    )
};

export default MyPosts;