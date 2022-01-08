import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {numberReducer} from "./reducers/NumberReducer";
import {NumberState} from "./types/NumberTypesAndInterfaces";
export interface ApplicationState {
    number: NumberState
}
const rootReducer= combineReducers({
    number: numberReducer
});

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {number: NumberState}
export type RootDispatchType = typeof store.dispatch