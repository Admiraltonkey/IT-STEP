import React from 'react';
import './App.css';
import  Header from './componen/header/header';
import Nav from './componen/nav/nav';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componen/Dialogs/DialogsContainer";
import SadebarContainer from "./componen/nav/Sadebar/SadebarContainer";
import UsersContainer from "./componen/Users/UsersContainer";
import ProfileContainer from "./componen/profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <div>
            <Nav/>
            <SadebarContainer/>
            </div>
            <div class = 'app-wrapper-content'>
                <Route path ='/Dialogs' render ={ () => <DialogsContainer  />}/>
                    <Route path = '/Profile/:userId?' render ={ () => <ProfileContainer  />}/>
                <Route path = '/users' render ={ () => <UsersContainer />}/>

            </div>
        </div>
        </BrowserRouter>
    )
}
export default App;

