import {
    MESSAGES_STARTED,
    MESSAGES_SUCCESS,
    MESSAGES_ERROR
  } from "../constants/MessagesConstants";
  import axios from "../axios";
import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";

export const MessagesAction =
  (token: string, chat_room_id: string) => (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: MESSAGES_STARTED });

    axios
      .get(`/chat/messages/${chat_room_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
       dispatch({type:MESSAGES_SUCCESS, messages: response.data});
      })
      .catch((error) => {
          dispatch({type:MESSAGES_ERROR, error:error});
        console.log(error);
      });
      
  };

