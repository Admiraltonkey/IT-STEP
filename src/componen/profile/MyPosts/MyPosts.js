import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Posts message = {p.message} likesCounts ={p.likesCount}/>);
   let  newPostElement = React.createRef();

    let onAddPost = ()=> {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text});
        // let action= updateNewPostTextActionCreator(text);
        // props.dispatch(action);
    }
    return <div className={s.postsBlock}>
        <h3>My posts </h3>
            <div>
               <div>
                   <textarea onChange={onPostChange} ref ={newPostElement} value ={props.newPostText}/>
                   <div>
                       <button onClick={onAddPost}> Add post </button>
               </div>
            </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                </div>
            </div>
}
export default MyPosts;

