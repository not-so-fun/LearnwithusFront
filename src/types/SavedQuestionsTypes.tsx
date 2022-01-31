import {
    SAVED_QUESTION_STARTED,
    SAVED_QUESTION_SUCCESS,
    SAVED_QUESTION_ERROR
  } from "../constants/SavedQuestionsConstants";
import {questionFeedListInterface} from "../reducers/QuestionFeedReducers";
  
  interface savedQuestionLoad {
    type: typeof SAVED_QUESTION_STARTED;
  }

  interface savedQuestionSuccess {
    type: typeof SAVED_QUESTION_SUCCESS;
    questions: questionFeedListInterface;
  }
  
  interface savedQuestionError {
    type: typeof SAVED_QUESTION_ERROR;
    error:string
  }
  
  export type SavedQuestionType =
    | savedQuestionLoad
    | savedQuestionSuccess
    | savedQuestionError;
  