import {
  MAIN_QUESTION_ANSWER_STARTED,
  MAIN_QUESTION_ANSWER_SUCCESS,
  MAIN_QUESTION_ANSWER_ERROR,
} from "../constants/MainQuestionAnswerConstants";

import { RootDispatchType } from "../stores";
import { Dispatch } from "redux";
import axios from "../axios";

export const MainQuestionAnswerAction =
  (token: string, question_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: MAIN_QUESTION_ANSWER_STARTED });
    axios
      .get(`/questions/${question_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: MAIN_QUESTION_ANSWER_SUCCESS,
          question: response.data.question,
          answers:response.data.answers
        });
      })
      .catch((error) => {
        // console.log(error.response);

        dispatch({
          type: MAIN_QUESTION_ANSWER_ERROR,
          error: error.response.data,
        });
      });
  };
