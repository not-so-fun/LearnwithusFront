import {
    MESSAGES_STARTED,
    MESSAGES_SUCCESS,
    MESSAGE_SUCCESS,
    MESSAGES_UPDATE,
    MESSAGES_ERROR
  } from "../constants/MessagesConstants";
  import {oneMessageInterface} from "../Screens/MessagesChatroom";
  
  interface MessagesLoad {
    type: typeof MESSAGES_STARTED;
  }

  interface MessagesSuccess {
    type: typeof MESSAGES_SUCCESS;
    messages: oneMessageInterface[];
  }
  interface MessagesUpdate{
    type: typeof MESSAGES_UPDATE;
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
    | MessagesUpdate
    | MessagesError;
  