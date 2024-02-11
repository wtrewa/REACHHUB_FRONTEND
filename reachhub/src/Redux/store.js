import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as playerReducer } from "./players/reducer";
import { reducer  as authReducer} from "./Auth/authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({playerReducer,authReducer})


export const store  = legacy_createStore(rootReducer,applyMiddleware(thunk))