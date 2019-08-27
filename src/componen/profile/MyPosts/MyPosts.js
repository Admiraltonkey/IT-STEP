import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";


const MyPosts = (props) => {
    // let posts = [
    //     {id: 1, message: 'How are you?', likesCount: 12},
    //     {id: 2, message: "It's my first post ", likesCount: 15}
    // ]
    let postsElements = props.posts.map( p => <Posts message = {p.message} likesCounts ={p.likesCount}/>);
   let  newPostElement = React.createRef();

    let addPost = ()=> {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text});
        let action= updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return <div className={s.postsBlock}>
        <h3>My posts </h3>
            <div>
               <div>
                   <textarea onChange={onPostChange} ref ={newPostElement} value ={props.newPostText}/>
                   <div>
                       <button onClick={addPost}> Add post </button>
               </div>
            </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                </div>
            </div>
}
export default MyPosts;

