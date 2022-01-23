import {
  ANSWER_THE_QUESTION_LOAD,
  ANSWER_THE_QUESTION_SUCCESS,
  ANSWER_THE_QUESTION_ERROR,
} from "../constants/AnswerTheQuestionConstants";
import {answerInterface} from "../reducers/AnsweresOnlyReducer"

interface answerQuestionLoad {
  type: typeof ANSWER_THE_QUESTION_LOAD;
}

interface answerQuestionSucess {
  type: typeof ANSWER_THE_QUESTION_SUCCESS;
  // answer: answerInterface|null;
}

interface answerQuestionError {
  type: typeof ANSWER_THE_QUESTION_ERROR;
}

export type AnswerTheQuestionType =
  | answerQuestionLoad
  | answerQuestionSucess
  | answerQuestionError;
