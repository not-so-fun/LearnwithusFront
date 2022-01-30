import {
    MAIN_QUESTION_ANSWER_STARTED,
    MAIN_QUESTION_ANSWER_SUCCESS,
    MAIN_QUESTION_ANSWER_ERROR,
    MAIN_QUESTION_ANSWER_ADDED_STARTED,
    MAIN_QUESTION_ANSWER_ADDED_ERROR
  } from "../constants/MainQuestionAnswerConstants";
  
 interface questionFeedListInterface {
    question_id:string,
    topic_id: string;
    topic_title:string,
    title: string;
    question: string;
    user_id: string;
    username: string;
    image: string;
  }
  interface mainQuestionAnswerStarted {
    type: typeof MAIN_QUESTION_ANSWER_STARTED;
  }
  interface mainQuestionAnswerAddedStarted {
    type: typeof MAIN_QUESTION_ANSWER_ADDED_STARTED;
  }
  
  interface mainQuestionAnswerSuccess {
    type: typeof MAIN_QUESTION_ANSWER_SUCCESS;
    question: questionFeedListInterface;
  }
  
  interface mainQuestionAnswerError {
    type: typeof MAIN_QUESTION_ANSWER_ERROR;
    error: string;
  }
  interface mainQuestionAnswerAddedError {
    type: typeof MAIN_QUESTION_ANSWER_ADDED_ERROR;
    error: string;
  }
  export type mainQuestionAnswerTypes =
    | mainQuestionAnswerStarted 
    | mainQuestionAnswerSuccess
    | mainQuestionAnswerError
    | mainQuestionAnswerAddedStarted
    | mainQuestionAnswerAddedError;