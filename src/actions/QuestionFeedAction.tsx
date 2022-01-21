import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
} from "../constants/QuestionFeedConstatns";

import axios from "../axios";
import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";

export const QuestionFeedAction =
  (token: string) => (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: QUESTION_FEED_LOAD_STARTED });
    axios
      .get(`/questions?set=${0}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
          console.log(response.data)
        dispatch({
          type: QUESTION_FEED_LOAD_SUCCESS,
          questions: response.data,
        });
      })
      .catch((error) => {
          console.log(error)
        dispatch({
          type: QUESTION_FEED_LOAD_ERROR,
          error: error.response.data,
        });
      });
  };
