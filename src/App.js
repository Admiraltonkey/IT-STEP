import React from 'react';
import './App.css';
import Nav from './componen/nav/nav';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componen/Dialogs/DialogsContainer";
import SadebarContainer from "./componen/nav/Sadebar/SadebarContainer";
import UsersContainer from "./componen/Users/UsersContainer";
import ProfileContainer from "./componen/profile/ProfileContainer";
import HeaderContainer from "./componen/header/HeaderContainer";
import Login from "./componen/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <HeaderContainer/>
            <div>
            <Nav/>
            <SadebarContainer/>
            </div>
            <div class = 'app-wrapper-content'>
                <Route path ='/Dialogs' render ={ () => <DialogsContainer  />}/>
                    <Route path = '/Profile/:userId?' render ={ () => <ProfileContainer  />}/>
                <Route path = '/users' render ={ () => <UsersContainer />}/>
                <Route path = '/login' render ={ () => <Login />}/>

            </div>
        </div>
        </BrowserRouter>
    )
}
export default App;

