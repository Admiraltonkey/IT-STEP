import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/es/connect/connect";


// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//         {(store)=> {
//             let state = store.getState().dialogsPage;
//             let onSendMessageClick  = ()=>{
//                 store.dispatch(sendMessageCreator())
//             }
//             let onNewMessageChange = (body)=>{
//
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage ={onSendMessageClick} dialogsPage={state} />
//         }}
//         </StoreContext.Consumer>
//     )
//         }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {

            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;