import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

export const ROOT_URL = 'https://Social-network.samuraijs.com/usersAPI/1.0';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;