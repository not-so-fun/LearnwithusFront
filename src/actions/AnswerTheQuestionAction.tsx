import { RootDispatchType } from "../stores";
import { Dispatch } from "redux";
import axios from "../axios";
import {ANSWERS_LOAD_SUCCESS} from "../constants/OnlyAnswersContants"
import {
  ANSWER_THE_QUESTION_LOAD,
  ANSWER_THE_QUESTION_ERROR,
  ANSWER_THE_QUESTION_SUCCESS,
} from "../constants/AnswerTheQuestionConstants";

export const AnswerTheQuestionAction =
  (token: string,question_id:string,answer:string) => (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: ANSWER_THE_QUESTION_LOAD });

    axios
      .post("/answers",{
        question_id,
        answer
      }, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({type:ANSWERS_LOAD_SUCCESS,answers:response.data})
        dispatch({type:ANSWER_THE_QUESTION_SUCCESS})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:ANSWER_THE_QUESTION_ERROR})

      });
  };
