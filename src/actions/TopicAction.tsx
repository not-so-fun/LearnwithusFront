import { RootDispatchType } from "../stores";
import {
  TOPIC_FETCHING_STARTED,
  TOPIC_FETCHING_SUCCESS,
  TOPIC_FETCHING_ERROR,
} from "../constants/TopicsConstants";

import { Dispatch } from "redux";
import axios from "../axios";

export const TopicAction =
  (token: string) => (dispatch: Dispatch<RootDispatchType>) => {

    dispatch({ type: TOPIC_FETCHING_STARTED });
    axios
      .get("/topics", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({type:TOPIC_FETCHING_SUCCESS,topics:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:TOPIC_FETCHING_ERROR,error:error.response.data})

      });
  };
