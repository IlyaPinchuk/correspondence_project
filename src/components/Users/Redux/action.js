export const SET_USERS = 'SET_USER';
export const FOLLOW = 'FOLLOW';
export const UN_FOLLOW = 'UN_FOLLOW';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADER, isLoading});
export const toggleFollowingProgress = (IsActive, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, IsActive, userId});