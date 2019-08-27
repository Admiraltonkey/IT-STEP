import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return <div className={s.item}>
                    <img src ='http://kinosweet.net/_bd/3/44835972.jpg'/>
        {props.message}
        <div>
        <span>like</span> { props.likesCounts }
        </div>
                </div>
}
export default Posts;

