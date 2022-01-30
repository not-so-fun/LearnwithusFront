import { CallToActionSharp, SatelliteAlt } from "@mui/icons-material";
import { strictEqual } from "assert";
import { stat } from "fs";
import {
  ASKED_QUESTION_FEED_LOAD_STARTED,
  ASKED_QUESTION_FEED_LOAD_SUCCESS,
  ASKED_QUESTION_FEED_LOAD_ERROR,
} from "../constants/MyQuestionAskedConstants";

import { QuestionAskedFeedTypes } from "../types/MyQuestionAskedTypes";
import { questionFeedListInterface } from "./QuestionFeedReducers";
export interface questionAskedFeedInterface {
  loading: boolean;
  questions: questionFeedListInterface[];
  error: string;
  moreQuestionLoading: boolean;
}

const questionState: questionAskedFeedInterface = {
  loading: false,
  questions: [],
  error: "",
  moreQuestionLoading: false,
};

export const QuestionAskedFeedReducer = (
  state = questionState,
  action:  QuestionAskedFeedTypes
) => {
  switch (action.type) {
    case ASKED_QUESTION_FEED_LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ASKED_QUESTION_FEED_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.questions,
      };
    case ASKED_QUESTION_FEED_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
   
    default:
      return { ...state };
  }
};
