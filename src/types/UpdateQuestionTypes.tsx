import {
     UPDATE_QUESTION_STARTED,
     UPDATE_QUESTION_LOADED,
     UPDATE_QUESTION_ERROR,
     UPDATE_QUESTION_UPDATED,
     UPDATE_POST_QUESTION_STARTED,
     UPDATE_POST_QUESTION_SUCCESS,
     UPDATE_POST_QUESTION_ERROR,
     UPDATE_POST_QUESTION_REMOVE_MESSAGE 
    } from "../constants/UpdateQuestionConstants";
import {questionFeedListInterface} from "../reducers/QuestionFeedReducers";
  
  interface updateQuestionStarted {
    type: typeof UPDATE_QUESTION_STARTED;
  }
  interface updatePostQuestionStarted {
    type: typeof  UPDATE_POST_QUESTION_STARTED;
  }

  interface updateQuestionLoaded {
    type: typeof UPDATE_QUESTION_LOADED;
    question: questionFeedListInterface;
  }
  interface updatePostQuestionSuccess {
    type: typeof UPDATE_POST_QUESTION_SUCCESS;
    message: string;
  }
  interface updatePostQuestionError {
    type: typeof UPDATE_POST_QUESTION_ERROR;
    error: string;
  }
  interface updatePostQuestionRemoveSuccessMessage{
    type: typeof UPDATE_POST_QUESTION_REMOVE_MESSAGE;

  }

  interface updateQuestionUpdated {
    type:typeof UPDATE_QUESTION_UPDATED;
    question: questionFeedListInterface;
  }
  
  interface updateQuestionError {
    type: typeof UPDATE_QUESTION_ERROR;
    error:string
  }
  
  export type updateQuestionType =
    | updateQuestionStarted
    | updateQuestionLoaded
    | updateQuestionUpdated
    |updatePostQuestionStarted
    |updatePostQuestionSuccess
    |updatePostQuestionError
    |updatePostQuestionRemoveSuccessMessage
    | updateQuestionError;
  