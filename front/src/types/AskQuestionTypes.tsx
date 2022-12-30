import {
    ASK_QUESTION_STARTED,
    ASK_QUESTION_SUCCESS,
    ASK_QUESTION_ERROR,
    ASK_QUESTION_REMOVE_MESSAGE
  } from "../constants/AskQuestionConstants";
  
  interface askQuestionStarted {
    type: typeof ASK_QUESTION_STARTED;
  }
  
  interface askQuestionSuccess {
    type: typeof ASK_QUESTION_SUCCESS;
    message: string;
  }
  
  interface askQuestionError {
    type: typeof ASK_QUESTION_ERROR;
    error: string;
  }
  
  interface askQuestionRemoveSuccessMessage{
    type: typeof ASK_QUESTION_REMOVE_MESSAGE;

  }
  
  export type AskQuestionTypes =
    | askQuestionStarted
    | askQuestionSuccess
    |askQuestionRemoveSuccessMessage
    | askQuestionError;
  
  