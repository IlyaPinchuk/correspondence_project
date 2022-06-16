import {userAPI} from "../../../api/api";

export const SET_USERS = 'SET_USERS';
export const FOLLOW = 'FOLLOW';
export const UN_FOLLOW = 'UN_FOLLOW';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADER, isLoading});
export const toggleFollowingProgress = (IsActive, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, IsActive, userId});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}