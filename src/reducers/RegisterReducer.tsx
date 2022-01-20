import {
  REGISTER_REQUEST_STARTED,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_ERROR,
  REMOVE_ERROR,
} from "../constants/RegisterConstants";
import { RegisterAction } from "../types/RegisterActionTypes";
export interface registerInterface {
  loading: boolean;
  message: string | null;
  error: string | null;
}

 const registerState: registerInterface = {
  loading: false,
  message: null,
  error: "",
};

export const RegisterReducer = (
  state = registerState,
  action: RegisterAction
) => {
  switch (action.type) {
    case REGISTER_REQUEST_STARTED:
      return { ...state, loading: true };
    case REGISTER_REQUEST_SUCCESS:
      return { ...state, loading: false, message: action.message, error: null };
    case REGISTER_REQUEST_ERROR:
      return { ...state, loading: false, error: action.error, message: null };
      
    case REMOVE_ERROR:
      return { ...state, error: "" };
    default:
      return { ...state };
  }
};
