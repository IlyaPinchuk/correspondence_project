import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {



    },
    _subscriber() {
        console.log('no subscribe')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

        this._subscriber(this._state);
    }


}
export default store



