import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
  QUESTION_FEED_ADD_SUCCESS,
  QUESTION_FEED_ADD_STARTED,
  QUESTION_FEED_ADD_ERROR,
  QUESTION_FEED_ADD_EMPTY

} from "../constants/QuestionFeedConstatns";

import { questionFeedListInterface } from "../reducers/QuestionFeedReducers";

interface questionFeedLoad {
  type: typeof QUESTION_FEED_LOAD_STARTED;
}
interface questionFeedAdd {
  type: typeof QUESTION_FEED_ADD_STARTED;
}

interface questionFeedAddSuccess {
  type: typeof QUESTION_FEED_ADD_SUCCESS;
  questions: questionFeedListInterface[];
 
}
interface questionFeedSuccess {
  type: typeof QUESTION_FEED_LOAD_SUCCESS;
  questions: questionFeedListInterface[];
}

interface questionFeedError {
  type: typeof QUESTION_FEED_LOAD_ERROR;
  error: string;
}

interface questionFeedAddEmpty {
  type: typeof QUESTION_FEED_ADD_EMPTY;
}

interface questionAddError {
  type: typeof QUESTION_FEED_ADD_ERROR;
  error: string;
}

export type QuestionFeedTypes =
  |questionFeedLoad
  |questionFeedAddSuccess
  |questionFeedSuccess
  |questionFeedError
  |questionFeedAdd
  |questionAddError
  |questionFeedAddEmpty;
