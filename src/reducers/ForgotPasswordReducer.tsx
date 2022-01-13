import {
  ForgotPassword_REQUEST_STARTED,
  ForgotPassword_REQUEST_SUCCESS,
  ForgotPassword_REQUEST_ERROR,
} from "../constants/ForgotPasswordConstants";
import { ForgotPasswordActionType } from "../types/ForgotPasswordActionTypes";

export interface ForgotPasswordStateInterface {
  loading: boolean;
  message: string;
  error: string;
}

const ForgotPasswordState: ForgotPasswordStateInterface = {
  loading: false,
  message: "",
  error: "",
};

export const ForgotPassowrdReducer = (
  state = ForgotPasswordState,
  action: ForgotPasswordActionType
) => {
  switch (action.type) {
    case ForgotPassword_REQUEST_STARTED:
      return { ...state, loading: true };
    case ForgotPassword_REQUEST_SUCCESS:
      return { ...state, loading: false, message: action.message, error: "" };
    case ForgotPassword_REQUEST_ERROR:
      return { ...state, loading: false, message: null, error: action.error };

    default:
      return { ...state };
  }
};
