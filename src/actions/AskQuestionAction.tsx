import {
  ASK_QUESTION_STARTED,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_ERROR,
  ASK_QUESTION_REMOVE_MESSAGE,
  DELETE_QUESTION_STARTED,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR
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
        console.log(response.data)
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

  export const DeleteQuestionAction =
  (
    token:string,
    question_id: string
  ) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: DELETE_QUESTION_STARTED });
    // console.log(sub_topic_id)
    axios
      .delete(
        `/questions/${question_id}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: DELETE_QUESTION_SUCCESS, question_id: question_id});
       
      })
      .catch((error) => {
        // console.log(error.response)
        dispatch({ type: DELETE_QUESTION_ERROR, error: error.response.data });
      });
  };

