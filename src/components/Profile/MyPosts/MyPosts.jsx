import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "./Button/Button";
import TextArea from "./TextArea/TextArea";
import Avatar from "../Avatar/Avatar";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} count={p.count} key={p.id} img={p.img}/>)

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <div>
            <div className={classes.wrapperMyPost}>

                <div className={classes.wrapperInput}>
                    <h4 className={classes.postTitle}>My post</h4>
                    <TextArea onChange={onPostChange} value={props.newPostText}/>
                    <Button name="Add post" onClick={addPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>

    )
}
export default MyPosts