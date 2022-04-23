import {
    MESSAGES_STARTED,
    MESSAGES_SUCCESS,
    MESSAGE_SUCCESS,
    MESSAGES_UPDATE,
    MESSAGES_ERROR
  } from "../constants/MessagesConstants";
  
  import { MessagesType } from "../types/MessagesTypes";
  
import {oneMessageInterface} from "../Screens/MessagesChatroom";
  
  export interface MessagesInterface {
    loading: boolean;
    messages: oneMessageInterface[];
    error?: string;
  }
  
  const messagesState: MessagesInterface = {
    loading: false,
    messages: [],
    error: "",
  };
  
  export const MessagesReducer = (
    state: MessagesInterface = messagesState,
    action: MessagesType 
  ) => {
    switch (action.type) {
      case MESSAGES_STARTED:
        return {
          ...state,
          loading: true,
          error:""
        };
      case MESSAGES_SUCCESS:
        return {
          ...state,
          loading: false,
          messages: action.messages
        };
        case MESSAGES_UPDATE:
          return{
            ...state,
            loading:false,
            messages:[...action.messages,...state.messages]
          }
        case MESSAGE_SUCCESS:
            return {
              ...state,
              loading: false,
              messages:[...state.messages,action.message] 
            };
      case MESSAGES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    
      default:
        return { ...state };
    }
  };
  