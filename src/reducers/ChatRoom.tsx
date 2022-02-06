import {
    CHATROOM_LOADED,
    CHATROOM_SUCCESS,
    CHATROOM_ERROR
  } from "../constants/ChatRoomConstants";
  
  import { ChatRoomType } from "../types/ChatRoomTypes";
  
import {ChatRoomInterface} from "../interfaces/messagesUsers";

  
  export interface chatRoomInterface {
    loading: boolean;
    chatRooms: ChatRoomInterface[];
    error?: string;
  }
  
  const chatRoomState: chatRoomInterface = {
    loading: false,
    chatRooms: [],
    error: "",
  };
  
  export const ChatRoomReducer = (
    state: chatRoomInterface = chatRoomState,
    action: ChatRoomType
  ) => {
    switch (action.type) {
      case CHATROOM_LOADED:
        return {
          ...state,
          loading: true,
          error:""
        };
      case CHATROOM_SUCCESS:
        return {
          ...state,
          loading: false,
          chatRooms: action.chatRooms
        };
      case CHATROOM_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    
      default:
        return { ...state };
    }
  };
  