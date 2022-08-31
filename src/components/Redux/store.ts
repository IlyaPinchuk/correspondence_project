import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "../Profile/Redux/reducer";
import dialogsReducer from "../Dialogs/Redux/reducer";
import usersReducer from "../Users/Redux/reducer";
import newsReducer from "../News/Redux/reducer";
import sidebarReducer from "../Navbar/Redux/reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store