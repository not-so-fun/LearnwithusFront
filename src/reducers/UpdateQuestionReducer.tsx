import {
    UPDATE_QUESTION_STARTED,
    UPDATE_QUESTION_LOADED,
    UPDATE_QUESTION_ERROR,
    UPDATE_POST_QUESTION_STARTED,
    UPDATE_POST_QUESTION_SUCCESS,
    UPDATE_POST_QUESTION_ERROR,
    UPDATE_POST_QUESTION_REMOVE_MESSAGE 
} from "../constants/UpdateQuestionConstants";
  
  import {updateQuestionType  } from "../types/UpdateQuestionTypes";
  
import {questionFeedListInterface} from "./QuestionFeedReducers";
  
  export interface UpdateQuestionInterface {
    loading: boolean
    questions: questionFeedListInterface | null;
    error?: string;
    message:string;
  }
  
  const updateQuestionState: UpdateQuestionInterface = {
    loading: false,
    questions: null,
    error: "",
    message:""
  };
  
  export const UpdateQuestionReducer = (
    state:  UpdateQuestionInterface  = updateQuestionState,
    action: updateQuestionType 
  ) => {
    switch (action.type) {
      case UPDATE_QUESTION_STARTED:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_QUESTION_LOADED:
        return {
          ...state,
          loading: false,
          questions: action.question
        };
      case UPDATE_QUESTION_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case UPDATE_POST_QUESTION_STARTED:
          return {
             ...state, 
             loading: true 
            };
        case UPDATE_POST_QUESTION_SUCCESS:
          return { 
            ...state, 
            loading: false, 
            message: action.message 
          };
        case UPDATE_POST_QUESTION_ERROR:
          return { 
            ...state, 
            loading: false, 
            error: action.error 
          };
        case UPDATE_POST_QUESTION_REMOVE_MESSAGE:
          return {
            ...state,
            loading:false,
            message:""}  
      default:
        return { ...state };
    }
  };
  