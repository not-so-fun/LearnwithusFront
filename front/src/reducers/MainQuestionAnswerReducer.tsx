import {
    MAIN_QUESTION_ANSWER_STARTED,
    MAIN_QUESTION_ANSWER_SUCCESS,
    MAIN_QUESTION_ANSWER_ERROR
  } from "../constants/MainQuestionAnswerConstants";
import {mainQuestionAnswerTypes} from "../types/MainQuestionAnswerTypes";
import {questionFeedListInterface} from "./QuestionFeedReducers"
import {answerInterface } from "./AnsweresOnlyReducer";

  export interface MainQuestionAnswerInterface {
    loading: boolean;
    error?: string;
    question:questionFeedListInterface|null ;
    answers:answerInterface[];
  }
  
  const askQuestionState: MainQuestionAnswerInterface = {
    loading: false,
    question:null,
    answers:[],
    error: "",
  };
  
  export const MainQuestionAnswerReducer = (
    state: MainQuestionAnswerInterface = askQuestionState,
    action: mainQuestionAnswerTypes
  ) => {
    switch (action.type) {
      case MAIN_QUESTION_ANSWER_STARTED:
        return { ...state, loading: true };
      case MAIN_QUESTION_ANSWER_SUCCESS:
        // console.log(action.question);
        return { 
          ...state, 
          loading: false, 
          question:action.question,
          answers:action.answers

        };
      case MAIN_QUESTION_ANSWER_ERROR:
        return { ...state, loading: false, error: action.error };
      default:
        return { ...state };
    }
  };
  
  interface answered{
      answer_id: string;
      question_id:string;
      answer:string;
      user_id:string;
      username:string;
      image:string;
  }