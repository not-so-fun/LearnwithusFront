import {
  RESET_PASSWORD_REQUEST_STARTED,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_ERROR,
} from "../constants/ResetPasswordConstants";

import { ResetPasswordActions } from "../types/ResetPasswordActionTypes";

export interface ResetPasswordStateInterface {
  loading: boolean;
  message: string;
  error: string;
}

const ResetPasswordState: ResetPasswordStateInterface = {
  loading: false,
  message: "",
  error: "",
};

export const ResetPassowrdReducer = (
  state = ResetPasswordState,
  action: ResetPasswordActions
) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST_STARTED:
      return { ...state, loading: true };
    case RESET_PASSWORD_REQUEST_SUCCESS:
      return { ...state, loading: false, message: action.message, error: "" };
    case RESET_PASSWORD_REQUEST_ERROR:
      return { ...state, loading: false, message: null, error: action.error };

    default:
      return { ...state };
  }
};
