
import { Dispatch } from "redux";
import {
    CHATROOM_LOADED,
    CHATROOM_SUCCESS,
    CHATROOM_ERROR
  } from "../constants/ChatRoomConstants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const ChatRoomAction =(token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: CHATROOM_LOADED });
    axios
      .get(`/chat/all/inbox?set=${0}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type: CHATROOM_SUCCESS,chatRooms:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:CHATROOM_ERROR,error:error.response.data})

      });
  };
