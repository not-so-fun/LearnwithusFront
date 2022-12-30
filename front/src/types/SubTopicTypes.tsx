import {
    SUB_TOPIC_FETCHING_STARTED,
    SUB_TOPIC_FETCHING_SUCCESS,
    SUB_TOPIC_FETCHING_ERROR,
  } from "../constants/SubTopicConstants";

interface subtopicsListInterface{
    sub_topic_id:string,
    title:string
}

  interface subtopicsStarted {
    type: typeof SUB_TOPIC_FETCHING_STARTED;
  }
  
  interface subtopicsSuccess {
    type: typeof SUB_TOPIC_FETCHING_SUCCESS;
    sub_topics: subtopicsListInterface[];
  }
  
  interface subtopicsError {
    type: typeof SUB_TOPIC_FETCHING_ERROR;
    error: string;
  }
  
  export type SubTopicTypes =
    | subtopicsStarted
    | subtopicsSuccess
    | subtopicsError;
