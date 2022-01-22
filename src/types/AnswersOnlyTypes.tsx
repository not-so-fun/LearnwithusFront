import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  NEW_ANSWERS_ADDED,
  ANSWERS_LOAD_ERROR,
} from "../constants/OnlyAnswersContants";
import { answerInterface } from "../reducers/AnsweresOnlyReducer";

interface answersOnlyStarted {
  type: typeof ANSWERS_LOAD_START;
}

interface answeresOnlySuccess {
  type: typeof ANSWERS_LOAD_SUCCESS;
  answers: answerInterface[] | null;
}

interface newAnswer {
  type: typeof NEW_ANSWERS_ADDED;
  answer: answerInterface;
}

interface answersOnlyError {
  type: typeof ANSWERS_LOAD_ERROR;
  error: string;
}

export type AnswersOnlyTypes =
  | answersOnlyStarted
  | answeresOnlySuccess
  | newAnswer
  | answersOnlyError;
