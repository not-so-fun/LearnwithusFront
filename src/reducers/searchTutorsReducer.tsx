import {
    SEARCH_TUTOR_STARTED,
    SEARCH_TUTOR_SUCCESS,
    SEARCH_TUTOR_ERROR
  } from "../constants/searchTutorConstants";
  
  import { SearchTutorType } from "../types/searchTutorTypes";
  import {profileUserDataInterface} from "../reducers/ProfileReducer"
  
  
  export interface searchTutorInterface {
    loading: boolean;
    tutors:profileUserDataInterface[];
    error?: string;
  }
  
  const searchTutorState: searchTutorInterface = {
    loading: false,
    tutors: [],
    error: "",
  };
  
  export const SearchTutorReducer = (
    state:  searchTutorInterface  =searchTutorState,
    action: SearchTutorType 
  ) => {
    switch (action.type) {
      case SEARCH_TUTOR_STARTED:
        return {
          ...state,
          loading: true,
          error:""
        };
      case SEARCH_TUTOR_SUCCESS:
        return {
          ...state,
          loading: false,
         tutors: action.tutors
        };
   
      case SEARCH_TUTOR_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
    
      default:
        return { ...state };
    }
  };
  