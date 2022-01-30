import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
  QUESTION_FEED_ADD_STARTED,
  QUESTION_FEED_ADD_SUCCESS,
  QUESTION_FEED_ADD_ERROR,
  QUESTION_FEED_ADD_EMPTY
} from "../constants/QuestionFeedConstatns";

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
        console.log(response.data);
        if(response.data.length === 0){
          dispatch({type: QUESTION_FEED_ADD_EMPTY});
        } else{
          dispatch({
            type: QUESTION_FEED_ADD_SUCCESS,
            questions: response.data,
          });
        }
        
      })
      .catch((error) => {
        dispatch({
          type: QUESTION_FEED_ADD_ERROR,
          error: error.response.data,
        });
      });
  };

