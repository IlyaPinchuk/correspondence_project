import React from "react";
import './App.scss';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users.tsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
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
    );
}

export default App;


