import { RootDispatchType } from "../stores";
import { Dispatch } from "redux";
import axios from "../axios";
import {
  ANSWER_THE_QUESTION_LOAD,
  ANSWER_THE_QUESTION_ERROR,
  ANSWER_THE_QUESTION_SUCCESS,
} from "../constants/AnswerTheQuestionConstants";

export const AnswerTheQuestionAction =
  () => (dispatch: Dispatch<RootDispatchType>) => {

    dispatch({ type: ANSWER_THE_QUESTION_LOAD });

    axios
      .post("/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
