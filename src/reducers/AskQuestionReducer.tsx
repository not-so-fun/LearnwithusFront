import {
    ASK_QUESTION_STARTED,
    ASK_QUESTION_SUCCESS,
    ASK_QUESTION_ERROR,
  } from "../constants/AskQuestionConstants";
import {AskQuestionTypes} from "../types/AskQuestionTypes"
  
  export interface askQuestionInterface {
    loading: boolean;
    message: string;
    error?: string;
  }
  
  const askQuestionState: askQuestionInterface = {
    loading: false,
    message: "",
    error: "",
  };
  
  export const AskQuestionReducer = (
    state: askQuestionInterface = askQuestionState,
    action: AskQuestionTypes
  ) => {
    switch (action.type) {
      case ASK_QUESTION_STARTED:
        return { ...state, loading: true };
      case ASK_QUESTION_SUCCESS:
        return { ...state, loading: false, message: action.message };
      case ASK_QUESTION_ERROR:
        return { ...state, loading: false, error: action.error };
      default:
        return { ...state };
    }
  };
  