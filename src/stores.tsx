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
import { QuestionFeedReducer } from "./reducers/QuestionFeedReducers";
import { MainQuestionAnswerReducer } from "./reducers/MainQuestionAnswerReducer";
import { WishesReducer } from "./reducers/WishesReducer";
import {AnswersOnlyReducer} from "./reducers/AnsweresOnlyReducer"
import { AnswerTheQuestionReducer } from "./reducers/AnswerTheQuestioinReducer";

const rootReducer = combineReducers({
  userInfo: LoginReducer,
  register: RegisterReducer,
  profile_info_data: ProfileReducer,
  forgot_password: ForgotPassowrdReducer,
  reset_password: ResetPassowrdReducer,
  ask_question: AskQuestionReducer,
  topics:TopicReducer,
  subtopics:SubTopicReducer,
  expertises:ExpertiseReducer,
  questionFeed:QuestionFeedReducer,
  mainQA: MainQuestionAnswerReducer,
  wishes: WishesReducer,
  answers:AnswersOnlyReducer,
  answer_question:AnswerTheQuestionReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type RootDispatchType = ReturnType<typeof store.dispatch>;
