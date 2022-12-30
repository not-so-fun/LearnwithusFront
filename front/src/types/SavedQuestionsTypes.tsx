import {
    SAVED_QUESTION_STARTED,
    SAVED_QUESTION_SUCCESS,
    SAVED_QUESTION_ERROR,
    SAVED_QUESTION_DELETE
  } from "../constants/SavedQuestionsConstants";
import {questionFeedListInterface} from "../reducers/QuestionFeedReducers";
  
  interface savedQuestionLoad {
    type: typeof SAVED_QUESTION_STARTED;
  }

  interface savedQuestionSuccess {
    type: typeof SAVED_QUESTION_SUCCESS;
    questions: questionFeedListInterface;
  }
  interface savedQuestionDelete {
    type:typeof SAVED_QUESTION_DELETE;
    question_id: string;
  }
  
  interface savedQuestionError {
    type: typeof SAVED_QUESTION_ERROR;
    error:string
  }
  
  export type SavedQuestionType =
    | savedQuestionLoad
    | savedQuestionSuccess
    | savedQuestionDelete
    | savedQuestionError;
  