import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


const App = (props) => {
    return (<Router>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>);
}

export default App;


