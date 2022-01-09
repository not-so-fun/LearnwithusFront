import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers,createStore,applyMiddleware } from "redux";
import { LoginReducer } from "./reducers/LoginReducer";
import { RegisterReducer } from "./reducers/RegisterReducer";

const rootReducer=combineReducers({
    userInfo:LoginReducer,
    register:RegisterReducer
})

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store

export type RootStateType=ReturnType<typeof store.getState>
export type RootDispatchType=ReturnType<typeof store.dispatch>
