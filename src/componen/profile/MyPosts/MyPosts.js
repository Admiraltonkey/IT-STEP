import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/valedators/validators";
import {Textarea} from "../../common/FormsControl/FormControl";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likesCounts={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
});

const AddNewPostForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name ='newPostText' component ={Textarea} validate ={[required,maxLength10]}/>
                <div>
                    <button > Add post </button>
                </div>
            </div>
        </form>
    )
}
 const AddNewPostFormRedux =reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;

