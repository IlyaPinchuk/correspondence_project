import React from "react";
import './App.scss';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import store from "./components/Redux/redux-store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className='app-wrapper'>
                    <Header/>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs/>}/>
                            <Route path='/profile/:userId' element={<Profile/>}/>
                            <Route path='/users' element={<Users/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;


