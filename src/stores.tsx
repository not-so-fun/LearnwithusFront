import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { LoginReducer } from "./reducers/LoginReducer";
import { RegisterReducer } from "./reducers/RegisterReducer";
import { ProfileReducer } from "./reducers/ProfileReducer";
import { ForgotPassowrdReducer } from "./reducers/ForgotPasswordReducer";
import { ResetPassowrdReducer } from "./reducers/ResetPasswordReducer";
import { AskQuestionReducer } from "./reducers/AskQuestionReducer";
import { ExpertiseReducer } from "./reducers/ExpertiseReducer";
import { TopicReducer } from "./reducers/TopicReducer";
import { SubTopicReducer } from "./reducers/SubTopicReducer";

const rootReducer = combineReducers({
  userInfo: LoginReducer,
  register: RegisterReducer,
  profile_info_data: ProfileReducer,
  forgot_password: ForgotPassowrdReducer,
  reset_password: ResetPassowrdReducer,
  ask_question: AskQuestionReducer,
  topics:TopicReducer,
  subtopics:SubTopicReducer,
  expertises:ExpertiseReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type RootDispatchType = ReturnType<typeof store.dispatch>;
