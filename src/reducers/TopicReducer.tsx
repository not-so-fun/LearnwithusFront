import {
  TOPIC_FETCHING_STARTED,
  TOPIC_FETCHING_SUCCESS,
  TOPIC_FETCHING_ERROR,
} from "../constants/TopicsConstants";

import { TopicTypes } from "../types/TopicTypes";

interface topicsListInterface {
  topic_id: string;
  title: string;
}

export interface topicInterface {
  loading: boolean;
  topics: topicsListInterface[] | null;
  error: string;
}

const topicState: topicInterface = {
  loading: false,
  topics: null,
  error: "",
};

export const TopicReducer = (
  state: topicInterface = topicState,
  action: TopicTypes
) => {
  switch (action.type) {
    case TOPIC_FETCHING_STARTED:
      return { ...state, loading: true };
    case TOPIC_FETCHING_SUCCESS:
      return { ...state, loading: false, topics: action.topics };
    case TOPIC_FETCHING_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
