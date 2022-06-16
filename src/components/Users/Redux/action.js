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

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}


const changeFollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => (dispatch) => {
    changeFollow(dispatch, userId,  userAPI.follow, followSuccess)
}

export const unFollow = (userId) => (dispatch) => {
     changeFollow(dispatch, userId, userAPI.unFollow, unFollowSuccess)
}