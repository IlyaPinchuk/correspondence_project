import {userAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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
export const setUserPhoto = (photo) => ({type: SET_USER_DATA, data: {photo}});

export const getAuth = () => async (dispatch) => {
    const response = await userAPI.authMe();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await userAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuth())
    }
};

export const logout = () => async (dispatch) => {
    const response = await userAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
