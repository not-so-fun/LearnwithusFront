import {
    TOPIC_FETCHING_STARTED,
    TOPIC_FETCHING_SUCCESS,
    TOPIC_FETCHING_ERROR,
  } from "../constants/TopicsConstants";

interface topicsListInterface{
    topic_id:string,
    title:string
}

  interface topicsStarted {
    type: typeof TOPIC_FETCHING_STARTED;
  }
  
  interface topicsSuccess {
    type: typeof TOPIC_FETCHING_SUCCESS;
    topics: topicsListInterface[];
  }
  
  interface topicsError {
    type: typeof TOPIC_FETCHING_ERROR;
    error: string;
  }
  
  export type TopicTypes =
    | topicsStarted
    | topicsSuccess
    | topicsError;
