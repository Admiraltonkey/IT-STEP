import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sadebarReducer from "./sadebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sadebar:sadebarReducer,
    usersPage: usersReducer,
    auth:authReducer
});

let store = createStore(reducers);

export default store;