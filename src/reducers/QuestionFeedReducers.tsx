import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
  QUESTION_FEED_ADD_STARTED,
  QUESTION_FEED_ADD_ERROR,
  QUESTION_FEED_ADD_SUCCESS,
  QUESTION_FEED_ADD_EMPTY
} from "../constants/QuestionFeedConstatns";

import { QuestionFeedTypes } from "../types/QuestionfeedTypes";

export interface questionFeedListInterface {
  question_id: string;
  topic_id: string;
  topic_title: string;
  upvote: boolean;
  title: string;
  question: string;
  user_id: string;
  username: string;
  image: string;
  total_upvotes: string;
  total_downvotes: string;
}

export interface questionFeedInterface {
  loading: boolean;
  questions: questionFeedListInterface[];
  error: string;
  count:number;
  moreQuestionLoading: boolean;
}

const questionState: questionFeedInterface = {
  loading: false,
  questions: [],
  error: "",
  count:0,
  moreQuestionLoading: false,
};

export const QuestionFeedReducer = (
  state = questionState,
  action: QuestionFeedTypes
) => {
  switch (action.type) {
    case QUESTION_FEED_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case QUESTION_FEED_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        moreQuestionLoading: false,
        questions: action.questions,
        count:state.count + 1
      };
    case QUESTION_FEED_ADD_SUCCESS:
      return{
        ...state,
        moreQuestionLoading: false,
        questions:state.questions.concat(action.questions)
      }
    case QUESTION_FEED_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case QUESTION_FEED_ADD_STARTED:
      return {
        ...state,
        count:state.count +1,
        moreQuestionLoading: true
      };
    case QUESTION_FEED_ADD_EMPTY:
      return {
        ...state,
        count:state.count - 1,
        moreQuestionLoading: false,
        error:"No more data to show"

      };
    case QUESTION_FEED_ADD_ERROR:
      return {
        ...state,
        moreQuestionLoading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
