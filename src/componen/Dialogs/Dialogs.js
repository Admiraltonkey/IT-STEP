import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( dialog => <DialogItem name={dialog.name }  id={dialog.id}/>);

    let messagesElements = state.messages.map (message =><Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick  = ()=>{
        props.sendMessage()
}
let onNewMessageChange = (e)=>{
    let body = e.target.value;
    props.updateNewMessageBody(body);
}

if(!props.isAuth ) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.DialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
<div>
    <div>
        <textarea value = {newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'> </textarea>
    </div>
    <div>
<button onClick={onSendMessageClick }>Send</button>
    </div>
</div>
            </div>
        </div>
    )
}

export default Dialogs;