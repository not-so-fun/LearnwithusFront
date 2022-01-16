import {
  ASK_QUESTION_STARTED,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_ERROR,
} from "../constants/AskQuestionConstants";

import { RootDispatchType } from "../stores";
import { Dispatch } from "redux";
import axios from "../axios";

export const AskQuestionAction =
  (
    token: string,
    topic_id: string,
    sub_topic_id: string,
    title: string,
    question: string
  ) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: ASK_QUESTION_STARTED });
    axios
      .post(
        "/questions",
        {
          topic_id,
          sub_topic_id,
          title,
          question,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: ASK_QUESTION_SUCCESS, message: response.data });
      })
      .catch((error) => {
        // console.log(error.response)
        dispatch({ type: ASK_QUESTION_ERROR, error: error.response.data });
      });
  };
