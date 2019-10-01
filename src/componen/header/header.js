import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";


const header =(props)=>{
 return <header className={s.header}>
     <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png"/>

     <div className={s.loginBlock}>
         {props.isAuth ? props.login
         :<NavLink to={'/login'}>Login</NavLink>}
     </div>
 </header>
}
export default header;

