import { StarRateTwoTone } from "@material-ui/icons";
import {
    REPLY_ANSWER_ERROR,
    REPLY_ANSWER_LOAD,
    REPLY_ANSWER_SUCCESS,
  } from "../constants/ReplyAnswerConstants";
  import { ReplyAnswerTypes } from "../types/ReplyAnswerTypes";

  export interface replyInterface{
    reply_id: string;
    answer_id: string;
    upvote: boolean;
    reply: string;
    user_id: string;
    username: string;
    image: string;
  }

  export interface replyAnswerStateInterface{
      loading:boolean,
      replies:replyInterface[]
      error:""
  }
  
  const replyAnswerState:replyAnswerStateInterface={loading:false,replies:[],error:""}

  export const ReplyAnswerReducer=(state=replyAnswerState,action:ReplyAnswerTypes)=>{
      switch(action.type)
      {
          case REPLY_ANSWER_LOAD:
              return {...state,loading:true}
        case REPLY_ANSWER_SUCCESS:
            return {...state,loading:false,replies:action.replies}
        case REPLY_ANSWER_ERROR:
            return {...state,loading:false,error:action.error}
          default:
              return {...state}
      }

  }