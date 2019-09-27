import React from 'react';
import s from './nav.module.css';
import {NavLink} from "react-router-dom";


const nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.active}>
                    Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active}>
                    Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.active}>
                    Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>
                    News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>
                    Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>
                    Settings</NavLink>
            </div>
            <div className={s.item}>
            <div className={s.friends}>
                <NavLink to='/friends' activeClassName={s.active}>
                    Friends</NavLink>
            </div> </div>


        </nav>)

}
export default nav;