import React from 'react';
import './App.css';
import  Header from './componen/header/header';
import Nav from './componen/nav/nav';
import Profile from './componen/profile/Profile';
import Dialogs from "./componen/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Sadebar from "./componen/nav/Sadebar/Sadebar";
import DialogsContainer from "./componen/Dialogs/DialogsContainer";
import SadebarContainer from "./componen/nav/Sadebar/SadebarContainer";


const App = (props) => {
    debugger
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
                    <Route path = '/Profile' render ={ () => <Profile  />}/>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default App;

