import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT, SET_USERS,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    TOGGLE_IS_LOADER,
    UN_FOLLOW
} from "./action";

let initialState = {
    users: [{id: '1'}],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            debugger
            return {...state, users: state.users};
        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: true}
        //             }
        //             return user
        //         })
        //     };
        // case UN_FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: false}
        //             }
        //             return user
        //         })
        //     };

        // case SET_TOTAL_COUNT:
        //     return {...state, totalUsersCount: action.totalCount};
        // case SET_CURRENT_PAGE:
        //     return {...state, currentPage: action.page};
        // case TOGGLE_IS_LOADER:
        //     return {...state, isLoading: action.isLoading};
        // case TOGGLE_IS_FOLLOWING_PROGRESS:
        //     return {
        //         ...state, followingInProgress: action.IsActive
        //             ? state.followingInProgress.concat(action.userId)
        //             : state.followingInProgress.filter(id => id !== action.userId)
        //     };
        default:
            return state;
    }
}
export default usersReducer;