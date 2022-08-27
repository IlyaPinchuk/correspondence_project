import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "../Navbar/Redux/reducer";
import authReducer from "./auth-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import profileReducer from "../Profile/Redux/reducer";
import usersReducer from "../Users/Redux/reducer";
import dialogsReducer from "../Dialogs/Redux/reducer";
import thunk from "redux-thunk";
import newsReducer from "../News/Redux/reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: reducer,
    usersPage: usersReducer,
    auth: authReducer,
    newsPage:newsReducer

})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store