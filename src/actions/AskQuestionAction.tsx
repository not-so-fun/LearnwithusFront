import {
  ASK_QUESTION_STARTED,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_ERROR,
  ASK_QUESTION_REMOVE_MESSAGE
} from "../constants/AskQuestionConstants";

import { RootDispatchType } from "../stores";
import { Dispatch } from "redux";
import axios from "../axios";

import { formDataInterface } from "../components/AskQuestionsComponent/AskQuestionForm";

export const AskQuestionAction =
  (
    token: string,
    topic_id: string,
    sub_topic_id: string,
    title: string,
    question: string,
    setFormData:React.Dispatch<React.SetStateAction<formDataInterface>>
  ) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: ASK_QUESTION_STARTED });
    // console.log(sub_topic_id)
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
        setTimeout(()=>{
          // console.log("Removed")
          dispatch({type:ASK_QUESTION_REMOVE_MESSAGE})
        },3000)
        return true;
      })
      .catch((error) => {
        // console.log(error.response)
        dispatch({ type: ASK_QUESTION_ERROR, error: error.response.data });
      });
  };
