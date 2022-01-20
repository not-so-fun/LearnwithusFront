import {ANSWERS_LOAD_START,ANSWERS_LOAD_SUCCESS,ANSWERS_LOAD_ERROR} from "../constants/OnlyAnswersContants"
import {answerInterface} from "../reducers/AnsweresOnlyReducer"
  
  interface answersOnlyStarted {
    type: typeof ANSWERS_LOAD_START;
  }
  
  interface answeresOnlySuccess {
    type: typeof ANSWERS_LOAD_SUCCESS;
    answers: string;
  }
  
  interface answersOnlyError {
    type: typeof ANSWERS_LOAD_ERROR;
    error: string;
  }
  
  export type AnswersOnlyTypes =
    | answersOnlyStarted
    | answeresOnlySuccess
    | answersOnlyError;
  
  