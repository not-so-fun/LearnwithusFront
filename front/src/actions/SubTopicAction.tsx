import { RootDispatchType } from "../stores";
import {
    SUB_TOPIC_FETCHING_STARTED,
    SUB_TOPIC_FETCHING_SUCCESS,
    SUB_TOPIC_FETCHING_ERROR,
  } from "../constants/SubTopicConstants";

import { Dispatch } from "redux";
import axios from "../axios";

export const SubTopicAction =
  (token: string,topic_id:string) => (dispatch: Dispatch<RootDispatchType>) => {

    dispatch({ type: SUB_TOPIC_FETCHING_STARTED });

    axios
      .get(`/sub_topics/${topic_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({type:SUB_TOPIC_FETCHING_SUCCESS,sub_topics:response.data})
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({type:SUB_TOPIC_FETCHING_ERROR,error:error.response.data})

      });
  };
