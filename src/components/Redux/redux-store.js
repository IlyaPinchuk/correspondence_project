import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import profileReducer from "../Profile/Redux/reducer";
import usersReducer from "../Users/Redux/reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

})

let store = createStore(reducers, composeWithDevTools())
window.store = store

export default store