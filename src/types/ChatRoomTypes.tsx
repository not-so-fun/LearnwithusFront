import {
    CHATROOM_LOADED,
    CHATROOM_SUCCESS,
    CHATROOM_ERROR
  } from "../constants/ChatRoomConstants";
import {ChatRoomInterface} from "../interfaces/messagesUsers" 
  
  interface chatRoomLoad {
    type: typeof CHATROOM_LOADED;
  }

  interface chatRoomSuccess {
    type: typeof CHATROOM_SUCCESS;
    chatRooms: ChatRoomInterface;
  }
 
  
  interface chatRoomError {
    type: typeof CHATROOM_ERROR;
    error:string
  }
  
  export type ChatRoomType =
    | chatRoomLoad
    | chatRoomSuccess
    | chatRoomError;
  