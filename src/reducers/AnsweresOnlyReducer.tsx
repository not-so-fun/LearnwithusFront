import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
} from "../constants/OnlyAnswersContants";

import { AnswersOnlyTypes } from "../types/AnswersOnlyTypes";

export interface answerInterface {
  answer_id: string;
  question_id: string;
  upvote: boolean;
  answer: string;
  user_id:string,
  username:string,
  image:string
}

export interface answersInterface {
  loading: boolean;
  answers: answerInterface[] | null;
  error?: string;
}

const answeresState: answersInterface = {
  loading: false,
  answers: null,
  error: "",
};

export const AnswersOnlyReducer = (
  state: answersInterface = answeresState,
  action: AnswersOnlyTypes
) => {
  switch (action.type) {
    case ANSWERS_LOAD_START:
      return { ...state, loading: true };
    case ANSWERS_LOAD_SUCCESS:
      return { ...state, loading: false, answers: action.answers };
    case ANSWERS_LOAD_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
