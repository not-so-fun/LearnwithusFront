import {
    EXPERTISE_EDIT_LOAD,
    EXPERTISE_EDIT_SUCCESS,
    EXPERTISE_EDIT_ERROR,
    EXPERTISE_EDIT_TEMP,
  } from "../constants/ExpertiseEditConstants";
//   import { wishesEditInterface } from "../reducers/WishesEditReducer";
import {expertiseEditInterface} from "../reducers/ExpertiseEditReducer"
  
  interface expertiseLoadAction {
    type: typeof EXPERTISE_EDIT_LOAD;
  }
  
  interface expertiseTempAction {
    type: typeof EXPERTISE_EDIT_TEMP,
    expertise: expertiseEditInterface;
  }
  
  interface expertiseSuccessAction {
    type: typeof EXPERTISE_EDIT_SUCCESS;
  }
  
  interface expertiseErrorAction {
    type: typeof EXPERTISE_EDIT_ERROR;
    error: string;
  }
  
  export type ExpertiseEditTypes =
    | expertiseLoadAction
    | expertiseSuccessAction
    | expertiseTempAction
    | expertiseErrorAction;
  