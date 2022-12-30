import {
  APPROACH_REQUEST_ERROR,
  APPROACH_REQUST_SUCCESS,
  APPROACH_START,
} from "../constants/ApproachConstants";
import { ApproachTypes } from "../types/ApproachTypes";
export interface approachUserInterface {
  loading: boolean;
  error: string;
}
const approachUserState: approachUserInterface = { loading: false, error: "" };
export const ApproachReducer = (
  state = approachUserState,
  action: ApproachTypes
) => {
    switch(action.type){
        case APPROACH_START:
            return {...state,loading:true}
        case APPROACH_REQUST_SUCCESS:
            return {...state,loading:false}
        case APPROACH_REQUEST_ERROR:
            return {...state,loading:false,error:action.error}
        default:
            return {...state}
    }
};

