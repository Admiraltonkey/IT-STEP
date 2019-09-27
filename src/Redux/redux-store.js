import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sadebarReducer from "./sadebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sadebar:sadebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;