import {securityAPI, userAPI} from "../../api/api";
import {IAuthReducerShape} from "../../Models/interfaces";
import {AnyAction} from "redux";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'


let initialState:IAuthReducerShape = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action: AnyAction):IAuthReducerShape => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data,
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                ...action.data,
                photo: action.data.photo


            }
        default:
            return state
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    data: {captchaUrl}
});

export const setUserPhoto = (photo) => ({type: SET_USER_DATA, data: {photo}});

export const getAuth = () => async (dispatch) => {
    const response = await userAPI.authMe();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await userAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getAuth())
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

};

export const logout = () => async (dispatch) => {
    const response = await userAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
