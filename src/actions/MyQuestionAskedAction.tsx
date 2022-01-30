import {
    ASKED_QUESTION_FEED_LOAD_STARTED,
    ASKED_QUESTION_FEED_LOAD_SUCCESS,
    ASKED_QUESTION_FEED_LOAD_ERROR
  } from "../constants/MyQuestionAskedConstants";
  import store from "../stores";
  
  import axios from "../axios";
  import { Dispatch } from "redux";
  import { RootDispatchType } from "../stores";
  import { countReset } from "console";
  
  export const AskedQuestionFeedAction =
    (token: string) => (dispatch: Dispatch<RootDispatchType>) => {
      dispatch({ type: ASKED_QUESTION_FEED_LOAD_STARTED });
      axios
        .get(`/questions/all/asked_by_me?set=0`,{
          headers: {
            "x-auth-token": token,
          },
        })
        .then((response) => {
          dispatch({
            
            type: ASKED_QUESTION_FEED_LOAD_SUCCESS,
            questions: response.data,
          });
        })
        .catch((error) => {
            // console.log(error)
          dispatch({
            type: ASKED_QUESTION_FEED_LOAD_ERROR,
            error: error.response.data,
          });
        });
    };
  