import {
    SUB_TOPIC_FETCHING_STARTED,
    SUB_TOPIC_FETCHING_SUCCESS,
    SUB_TOPIC_FETCHING_ERROR,
  } from "../constants/SubTopicConstants";
import {SubTopicTypes} from "../types/SubTopicTypes"
  
  interface subtopicsListInterface {
    sub_topic_id: string;
    title: string;
  }
  
  export interface subtopicInterface {
    loading: boolean;
    sub_topics: subtopicsListInterface[] | null;
    error: string;
  }
  
  const subtopicState: subtopicInterface = {
    loading: false,
    sub_topics: null,
    error: "",
  };
  
  export const SubTopicReducer = (
    state: subtopicInterface = subtopicState,
    action: SubTopicTypes
  ) => {
    switch (action.type) {
      case SUB_TOPIC_FETCHING_STARTED:
        return { ...state, loading: true };
      case SUB_TOPIC_FETCHING_SUCCESS:
        return { ...state, loading: false, sub_topics: action.sub_topics };
      case SUB_TOPIC_FETCHING_ERROR:
        return { ...state, loading: false, error: action.error };
      default:
        return { ...state };
    }
  };
  
  