import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
} from "../constants/QuestionFeedConstatns";

import { QuestionFeedTypes } from "../types/QuestionfeedTypes";

export interface questionFeedListInterface {
  question_id:string,
  topic_id: string;
  topic_title:string,
  upvote:boolean,
  title: string;
  question: string;
  user_id: string;
  username: string;
  image: string;
}

export interface questionFeedInterface {
  loading: boolean;
  questions: questionFeedListInterface[] | null;
  error: string;
}

const questionState: questionFeedInterface = {
  loading: false,
  questions: null,
  error: "",
};

export const QuestionFeedReducer = (
  state = questionState,
  action: QuestionFeedTypes
) => {
    switch(action.type)
    {
        case QUESTION_FEED_LOAD_STARTED:
            return {...state,loading:true}
        case QUESTION_FEED_LOAD_SUCCESS:
            return {...state,loading:false,questions:action.questions}
        case QUESTION_FEED_LOAD_ERROR:
            return {...state,loading:false,error:action.error}
        default:
            return {...state}
    }
};
