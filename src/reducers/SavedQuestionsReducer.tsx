import {
    SAVED_QUESTION_STARTED,
    SAVED_QUESTION_SUCCESS,
    SAVED_QUESTION_ERROR,
    SAVED_QUESTION_DELETE
  } from "../constants/SavedQuestionsConstants";
  
  import { SavedQuestionType } from "../types/SavedQuestionsTypes";
  
import {questionFeedListInterface} from "./QuestionFeedReducers";
  
  export interface questionsInterface {
    loading: boolean;
    questions: questionFeedListInterface[];
    error?: string;
  }
  
  const questionsState: questionsInterface = {
    loading: false,
    questions: [],
    error: "",
  };
  
  export const SavedQuestionReducer = (
    state: questionsInterface = questionsState,
    action: SavedQuestionType
  ) => {
    switch (action.type) {
      case SAVED_QUESTION_STARTED:
        return {
          ...state,
          loading: true,
        };
      case SAVED_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          questions: action.questions
        };
      case SAVED_QUESTION_DELETE:
        console.log(action.question_id);
        return{
          ...state,
          loading:false,
          questions:state.questions.filter((question) => question.question_id !== action.question_id)
        }
      case SAVED_QUESTION_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    
      default:
        return { ...state };
    }
  };
  