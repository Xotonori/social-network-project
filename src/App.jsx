import React from 'react';
import './App.css';
import Header from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <main className='content'>
                <Route path='/profile/:userId?' render={() => (<Profile />)}/>
                <Route path='/dialogs' render={() => (<DialogsContainer />)}/>
                <Route path='/users' render={() => (<Users />)}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </main>
        </div>
    );
};

export default App;

