import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormControl";
import {maxLengthCreator, required} from "../../utils/valedators/validators";

 const maxLength50 = maxLengthCreator(50)
const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( dialog => <DialogItem name={dialog.name }  id={dialog.id}/>);

    let messagesElements = state.messages.map (message =><Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

let addNewMessage =(values)=>{
    props.sendMessage(values.newMessageBody)
}

if(!props.isAuth ) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.DialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit ={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate ={[required,maxLength50]} name ='newMessageBody' placeholder='Enter your message' />
        </div>
        <div>
        <button >Send</button>
        </div> </form>
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;