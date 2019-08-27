import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props)=>{
  //   let posts = [
  //  {id: 1, message: 'How are you?', likesCount: 12},
  // {id: 2, message: "It's my first post ", likesCount: 15}]
 return (
     <div>
         <ProfileInfo />
     <div>
     <MyPosts posts={props.state.posts}
              newPostText = {props.state.newPostText}
              dispatch={props.dispatch}/>
 </div>
     </div>
)}
export default Profile;

