import { Dispatch } from "redux";
import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
} from "../constants/OnlyAnswersContants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const AnswersOnlyAction =
  (token: string, question_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: ANSWERS_LOAD_START });
    axios
      .get(`/answers/${question_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({type:ANSWERS_LOAD_SUCCESS,answers:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:ANSWERS_LOAD_ERROR,error:error.response.data})

      });
  };
