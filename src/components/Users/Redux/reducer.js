import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT, ADD_USER,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    TOGGLE_IS_LOADER,
    UN_FOLLOW, SET_USERS
} from "./action";
import {updateObjectInArray} from "../../../untils/object-helpers";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return ({...state, users: action.users});
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case TOGGLE_IS_LOADER:
            return {...state, isLoading: action.isLoading};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.IsActive
                    ? state.followingInProgress.concat(action.userId)
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}
export default usersReducer;