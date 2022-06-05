import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "./Button/Button";
import TextArea from "./TextArea/TextArea";
import Avatar from "../Avatar/Avatar";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} count={p.count} img={p.img}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div className={classes.wrapperMyPost}>
                <Avatar
                    avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2-mguQ0xN80EZlubSKAE6lv7mn2FJAaX7ctVVkxFBRcf3D3GEHrp3izv0TL9GfK8dN8&usqp=CAU'/>
                <div className={classes.wrapperInput}>
                    <h4 className={classes.postTitle}>My post</h4>
                    <TextArea onChange={onPostChange} value={props.profilePage.newPostText}/>
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