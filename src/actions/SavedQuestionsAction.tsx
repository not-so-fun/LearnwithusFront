import {
  SAVED_QUESTION_STARTED,
  SAVED_QUESTION_SUCCESS,
  SAVED_QUESTION_ERROR,
} from "../constants/SavedQuestionsConstants";
import store from "../stores";

import axios from "../axios";
import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";

export const SavedQuestionPostAction =
  (token: string, question_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    console.log("hello world");
    console.log(token);
    console.log(question_id);

    axios
      .post(
        `/saved-questions`,
        { question_id },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // console.log(error)
        dispatch({
          type: SAVED_QUESTION_ERROR,
          error: error.response.data,
        });
      });
  };
