import {profileAPI} from "../../../api/api";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const SET_PHOTO = 'SET_PHOTO';
export const DELETE_POST = 'DELETE_POST';
export const IS_OWNER = 'IS_OWNER';

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const onPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setPhoto = (photos) => ({type: SET_PHOTO, photos});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const isOwner = (owner) => ({type: IS_OWNER, owner});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));

};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }

};
export const updatePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.updatePhoto(file);
    if (response.resultCode === 0) {
        dispatch(setPhoto(response.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}