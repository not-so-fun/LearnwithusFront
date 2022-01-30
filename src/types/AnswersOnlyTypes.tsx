import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
  ANSWERS_ADD_START,
  ANSWERS_ADD_ERROR,
} from "../constants/OnlyAnswersContants";
import { answerInterface } from "../reducers/AnsweresOnlyReducer";

interface answersOnlyStarted {
  type: typeof ANSWERS_LOAD_START;
}
interface answersAddedStarted {
  type: typeof ANSWERS_ADD_START;
}

interface answeresOnlySuccess {
  type: typeof ANSWERS_LOAD_SUCCESS;
  answers: answerInterface[];
}


interface answersOnlyError {
  type: typeof ANSWERS_LOAD_ERROR;
  error: string;
}
interface answersAddError {
  type: typeof ANSWERS_ADD_ERROR;
  error: string;
}

export type AnswersOnlyTypes =
  | answersOnlyStarted
  | answeresOnlySuccess
  | answersOnlyError
  |answersAddedStarted 
  |answersAddError ;
