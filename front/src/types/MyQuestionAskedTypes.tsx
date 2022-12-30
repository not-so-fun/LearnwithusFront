import {
    ASKED_QUESTION_FEED_LOAD_STARTED,
    ASKED_QUESTION_FEED_LOAD_SUCCESS,
    ASKED_QUESTION_FEED_LOAD_ERROR
  } from "../constants/MyQuestionAskedConstants";
  
  import { questionFeedListInterface } from "../reducers/QuestionFeedReducers";
  
  interface askedQuestionFeedLoad {
    type: typeof ASKED_QUESTION_FEED_LOAD_STARTED;
  }
 
  
  
  interface askedQuestionFeedSuccess {
    type: typeof ASKED_QUESTION_FEED_LOAD_SUCCESS;
    questions: questionFeedListInterface[];
  }
  
  interface askedQuestionFeedError {
    type: typeof ASKED_QUESTION_FEED_LOAD_ERROR;
    error: string;
  }

  
  export type QuestionAskedFeedTypes =
    |askedQuestionFeedLoad
    |askedQuestionFeedSuccess
    |askedQuestionFeedError;
  