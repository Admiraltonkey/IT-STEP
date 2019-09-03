import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sadebarReducer from "./sadebar-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sadebar:sadebarReducer});

let store = createStore(reducers);

export default store;