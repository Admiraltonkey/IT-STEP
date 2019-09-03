const UPDATE_NEW_POST_BODY= 'UPDATE_NEW_POST_BODY';
const SEND_MESSAGE= 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is your Dima '},
        {id: 3, message: 'Yo'},],

    dialogs: [{id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}],
    newMessageBody:''

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            return {
                ...state,
                 newMessageBody : action.body
            }
            // stateCopy.newMessageBody = action.body;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
             return {
                ...state,
                 newMessageBody : '',
                messages: [...state.messages,{id: 7, message: body}]
            }
            // stateCopy.newMessageBody = '';
            // stateCopy.messages.push();
        default:
            return state;
    }


}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_POST_BODY, body: body});
export default dialogsReducer;