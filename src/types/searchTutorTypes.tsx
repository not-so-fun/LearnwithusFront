import {
    SEARCH_TUTOR_STARTED,
    SEARCH_TUTOR_SUCCESS,
    SEARCH_TUTOR_ERROR
  } from "../constants/searchTutorConstants";
import {profileUserDataInterface} from "../reducers/ProfileReducer"
  
  interface searchTutorLoad {
    type: typeof SEARCH_TUTOR_STARTED;
  }

  interface searchTutorSuccess {
    type: typeof SEARCH_TUTOR_SUCCESS;
    tutors: profileUserDataInterface;
  }
 
  
  interface searchTutorError {
    type: typeof SEARCH_TUTOR_ERROR;
    error:string
  }
  
  export type SearchTutorType=
    | searchTutorLoad 
    | searchTutorSuccess
    | searchTutorError;
  