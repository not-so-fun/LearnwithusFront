import {
    MESSAGES_STARTED,
    MESSAGES_SUCCESS,
    MESSAGE_SUCCESS,
    MESSAGES_ERROR
  } from "../constants/MessagesConstants";
  import {oneMessageInterface} from "../Layout/MessagesChatroom";
  
  interface MessagesLoad {
    type: typeof MESSAGES_STARTED;
  }

  interface MessagesSuccess {
    type: typeof MESSAGES_SUCCESS;
    messages: oneMessageInterface[];
  }
  interface MessageSuccess{
      type: typeof MESSAGE_SUCCESS;
      message:oneMessageInterface;
  }

  
  interface MessagesError {
    type: typeof MESSAGES_ERROR;
    error:string;
  }
  
  export type MessagesType =
    | MessagesLoad
    | MessagesSuccess
    | MessageSuccess
    | MessagesError;
  