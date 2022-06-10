import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, onPostChange} from "../Redux/action";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, onPostChange})(MyPosts)
export default MyPostsContainer
