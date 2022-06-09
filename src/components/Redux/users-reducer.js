const SET_USERS = 'SET_USER'
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case TOGGLE_IS_LOADER:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.IsActive
                    ? state.followingInProgress.concat(action.userId)
                    : state.followingInProgress.filter(id => id !== action.userId) //state.followingInProgress.concat(action.usersId)
            }

        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UN_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADER, isLoading})
export const toggleFollowingProgress = (IsActive, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, IsActive, userId})

export default usersReducer;
