import React, {Component} from 'react';
import './App.css';
import Nav from './componen/nav/nav';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./componen/Dialogs/DialogsContainer";
import SadebarContainer from "./componen/nav/Sadebar/SadebarContainer";
import UsersContainer from "./componen/Users/UsersContainer";
import ProfileContainer from "./componen/profile/ProfileContainer";
import HeaderContainer from "./componen/header/HeaderContainer";
import Login from "./componen/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./componen/common/Preloader/Preloader";



class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized)
        {return <Preloader/>}
        return (
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <div>
                        <Nav/>
                        <SadebarContainer/>
                    </div>
                    <div class='app-wrapper-content'>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>

                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state)=>({
    initialized:state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

