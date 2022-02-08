import { Dispatch } from "redux";
import {
  ANSWERS_LOAD_START,
  ANSWERS_LOAD_SUCCESS,
  ANSWERS_LOAD_ERROR,
  ANSWERS_DELETE_START,
  ANSWERS_DELETE_SUCCESS,
  ANSWERS_DELETE_ERROR
} from "../constants/OnlyAnswersContants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const AnswersOnlyAction =
  (token: string, question_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: ANSWERS_LOAD_START });
    axios
      .get(`/answers/${question_id}?set=${0}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type:ANSWERS_LOAD_SUCCESS,answers:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:ANSWERS_LOAD_ERROR,error:error.response.data})

      });
  };

  export const AnswersDeleteAction =
  (token: string, answer_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
 
    axios
      .delete(`/answers/${answer_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        
        
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:ANSWERS_DELETE_ERROR,error:error.response.data})

      });
  };