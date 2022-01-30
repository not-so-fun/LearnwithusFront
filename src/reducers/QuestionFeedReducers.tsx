import { CallToActionSharp, SatelliteAlt } from "@mui/icons-material";
import { strictEqual } from "assert";
import { stat } from "fs";
import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
  QUESTION_FEED_ADD_STARTED,
  QUESTION_FEED_ADD_ERROR,
  QUESTION_FEED_ADD_SUCCESS,
  QUESTION_FEED_ADD_EMPTY,
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
  count: number;
  moreQuestionLoading: boolean;
}

const questionState: questionFeedInterface = {
  loading: false,
  questions: [],
  error: "",
  count: 1,
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
       
        questions: action.questions,
      };
    case QUESTION_FEED_ADD_SUCCESS:
      const truthy: number = action.questions.length === 10 ? 1 : 0; 
      let data: questionFeedListInterface[] = [...state.questions];
      let length: number =
        action.questions.length - (state.questions.length % 10);
      let index: number = 0;
      /*
state.questions = [0,1,2,3,4,5,6,7,8,9,10,action[1],action[2]]; length = 11 % 10 =1
action.questions = [0,1,2]; 3;
      */
      if (state.questions.length % 10 !== 0) {
        
        while (length !== 0) {
          data.push(action.questions[(state.questions.length % 10) + index]);
          index++;
          length--;
        }
      } else {
        data = data.concat(action.questions);
      }
      return {
        ...state,
        moreQuestionLoading: false,
        questions: data,
        count: state.count + truthy
      };

    case QUESTION_FEED_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case QUESTION_FEED_ADD_STARTED:
      return {
        ...state,
        moreQuestionLoading: true,
      };
    case QUESTION_FEED_ADD_EMPTY:
      return {
        ...state,
        moreQuestionLoading: false,
        error: "No more data to show",
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
