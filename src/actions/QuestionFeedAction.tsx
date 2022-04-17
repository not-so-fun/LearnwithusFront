import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
  QUESTION_FEED_ADD_STARTED,
  QUESTION_FEED_ADD_SUCCESS,
  QUESTION_FEED_ADD_ERROR,
  QUESTION_FEED_ADD_EMPTY
} from "../constants/QuestionFeedConstatns";
import store from "../stores";

import axios from "../axios";
import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";
import { countReset } from "console";

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
        console.log(response.data);
        dispatch({
          type: QUESTION_FEED_LOAD_SUCCESS,
          questions: response.data,
        });
      })
      .catch((error) => {
          // console.log(error)
        dispatch({
          type: QUESTION_FEED_LOAD_ERROR,
          error: error.response.data,
        });
      });
  };

  export const QuestionFeedActionMore =
  (token: string, count:number) => (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: QUESTION_FEED_ADD_STARTED });
    axios
      .get(`/questions?set=${count}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
       const questions= store.getState().questionFeed.questions;
       if(questions.length % 10 !== response.data.length){
        dispatch({
          type: QUESTION_FEED_ADD_SUCCESS,
          questions: response.data,
        });
       } else{
         dispatch({type:QUESTION_FEED_ADD_EMPTY});
       }
       
      
      })
      .catch((error) => {
        dispatch({
          type: QUESTION_FEED_ADD_ERROR,
          error: error.response.data,
        });
      });
  };

