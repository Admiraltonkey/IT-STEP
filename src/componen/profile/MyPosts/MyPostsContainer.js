import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/es/connect/connect";



// const MyPostsContainer = () =>
// {
// return (
//     <StoreContext.Consumer>{(store) => {
//         debugger
//             let state = store.getState();
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//
//             }
//         return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}/>
//         }}</StoreContext.Consumer>
// )
// };
let mapStateToProps =(state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewPostText:(text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}
let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

