import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
  NEW_ANSWERS_ADDED,
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
  total_downvotes: string
  total_upvotes: string
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
    case NEW_ANSWERS_ADDED:
      if (state.answers === null) {
        return { ...state, loading: false, answers: [action.answer] };
      } else {
        return {
          ...state,
          loading: false,
          answers: [...state.answers, action.answer],
        };
      }

    default:
      return { ...state };
  }
};
