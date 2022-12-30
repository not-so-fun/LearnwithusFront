import {
  ANSWER_THE_QUESTION_LOAD,
  ANSWER_THE_QUESTION_SUCCESS,
  ANSWER_THE_QUESTION_ERROR,
} from "../constants/AnswerTheQuestionConstants";
import { AnswerTheQuestionType } from "../types/AnswerTheQuestionTypes";
import { answerInterface } from "./AnsweresOnlyReducer";

export interface answerTheQuestionInterface {
  loading: boolean;
  answer: answerInterface | null;
  error: string;
}

const answerTheQuestionState: answerTheQuestionInterface = {
  loading: false,
  answer: null,
  error: "",
};

export const AnswerTheQuestionReducer = (
  state = answerTheQuestionState,
  action: AnswerTheQuestionType
) => {
  switch (action.type) {
    case ANSWER_THE_QUESTION_LOAD:
      return { ...state, loading: true };
    case ANSWER_THE_QUESTION_SUCCESS:
      return { ...state, loading: false};
    case ANSWER_THE_QUESTION_ERROR:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
