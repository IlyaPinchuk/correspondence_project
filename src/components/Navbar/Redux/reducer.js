import {SET_FRIEND} from "./action";
import {
    AiFillMessage,
    AiFillProfile,
    AiOutlineAppstore,
    AiOutlineUsergroupDelete
} from "react-icons/ai";




let initialState = {
    sideItem: [
        {name: 'Profile', url: '/profile/24400', id: 1, icon: <AiFillProfile/>},
        {name: 'Massages', url: '/dialogs', id: 2, icon: <AiFillMessage/>},
        {name: 'Users', url: '/users', id: 3, icon: <AiOutlineUsergroupDelete/>},
        {name: 'News', url: '/news', id: 4, icon: <AiOutlineAppstore/>},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIEND:
            return {...state, ...state.friends.concat(action.user)}
        default:
            return state;
    }
}
export default sidebarReducer;