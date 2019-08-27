import React from 'react';
import './App.css';
import  Header from './componen/header/header';
import Nav from './componen/nav/nav';
import Profile from './componen/profile/Profile';
import Dialogs from "./componen/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Sadebar from "./componen/nav/Sadebar/Sadebar";


const App = (props) => {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <div>
            <Nav/>
            <Sadebar friends = {props.state.sadebar.friends}/>
            </div>
            <div class = 'app-wrapper-content'>
                <Route path ='/Dialogs' render ={ () => <Dialogs store={props.store} />}/>
                    <Route path = '/Profile' render ={ () => <Profile state = {props.state.profilePage} dispatch={props.dispatch} />}/>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default App;

