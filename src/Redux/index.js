import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import LoginReducer from "./States/LoginAction";

const rootReducer = combineReducers({
    sesion: LoginReducer,
});

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}
