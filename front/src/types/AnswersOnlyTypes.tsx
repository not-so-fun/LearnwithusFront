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

interface answersDeleteStart{
  type:typeof ANSWERS_DELETE_START;
}
interface answersDeleteSuccess {
  type:typeof ANSWERS_DELETE_SUCCESS;
  answer_id:string;

}
interface answersDeleteError{
  type:typeof ANSWERS_DELETE_ERROR;
  error:string;
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
  |answersAddError
  |answersDeleteStart
  |answersDeleteSuccess
  |answersDeleteError ;
