import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
  ANSWERS_ADD_START,
  ANSWERS_ADD_ERROR,
  ANSWERS_DELETE_START,
  ANSWERS_DELETE_SUCCESS,
  ANSWERS_DELETE_ERROR
} from "../constants/OnlyAnswersContants";

import { AnswersOnlyTypes } from "../types/AnswersOnlyTypes";

export interface answerInterface {
  answer_id: string;
  question_id: string;
  upvote: boolean;
  answer: string;
  user_id: string;
  username: string;
  image: string;
  total_downvotes: string;
  total_upvotes: string;
}

export interface answersInterface {
  loading: boolean;
  moreAnswerLoading: boolean;
  answers: answerInterface[];
  deleteStart:boolean;
  error?: string;
}

const answeresState: answersInterface = {
  loading: false,
  moreAnswerLoading: false,
  answers: [],
  deleteStart:false,
  error: "",
};

export const AnswersOnlyReducer = (
  state: answersInterface = answeresState,
  action: AnswersOnlyTypes
) => {
  switch (action.type) {
    case ANSWERS_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case ANSWERS_ADD_START:
      return {
        ...state,
        moreAnswerLoading: true,
      };

    case ANSWERS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        answers: state.answers.concat(action.answers)
      };
    case ANSWERS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ANSWERS_ADD_ERROR:
      return {
        ...state,
        moreAnswerLoading: false,
        error: action.error,
      };
    case ANSWERS_DELETE_START:
      return{
        ...state,
        deleteStart: true
      }
    case ANSWERS_DELETE_SUCCESS:
      return{
        ...state,
        deleteStart:false,
        answers: state.answers.filter(ans => ans.answer_id != action.answer_id)
      }
      case ANSWERS_DELETE_ERROR:
        return {
          ...state,
          deleteStart: false,
          error: action.error,
        };
    
    default:
      return { ...state };
  }
};
