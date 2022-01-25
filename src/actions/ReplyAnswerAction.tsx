import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";
import {
  REPLY_ANSWER_LOAD,
  REPLY_ANSWER_SUCCESS,
  REPLY_ANSWER_ERROR,
} from "../constants/ReplyAnswerConstants";
import axios from "../axios";

export const ReplyAnswerAction =
  (token: string,answer_id:string) => (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: REPLY_ANSWER_LOAD });
    axios
      .get(`/replies/${answer_id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({type:REPLY_ANSWER_SUCCESS,replies:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:REPLY_ANSWER_ERROR,error:error.response.data})
      });
  };
