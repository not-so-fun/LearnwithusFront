import {
  QUESTION_FEED_LOAD_STARTED,
  QUESTION_FEED_LOAD_SUCCESS,
  QUESTION_FEED_LOAD_ERROR,
} from "../constants/QuestionFeedConstatns";

import { questionFeedListInterface } from "../reducers/QuestionFeedReducers";

interface questionFeedLoad {
  type: typeof QUESTION_FEED_LOAD_STARTED;
}

interface questionFeedSuccess {
  type: typeof QUESTION_FEED_LOAD_SUCCESS;
  questions: questionFeedListInterface[] | null;
}

interface questionFeedError {
  type: typeof QUESTION_FEED_LOAD_ERROR;
  error: string;
}

export type QuestionFeedTypes =
  | questionFeedLoad
  | questionFeedSuccess
  | questionFeedError;
