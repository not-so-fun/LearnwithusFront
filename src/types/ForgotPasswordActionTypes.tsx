import {
  ForgotPassword_REQUEST_STARTED,
  ForgotPassword_REQUEST_SUCCESS,
  ForgotPassword_REQUEST_ERROR,
} from "../constants/ForgotPasswordConstants";

interface ForgotPasswordStartingAction {
  type: typeof ForgotPassword_REQUEST_STARTED;
}

interface ForgotPasswordSuccessAction {
  type: typeof ForgotPassword_REQUEST_SUCCESS;
  message: string;
}

interface ForgotPasswordErrorAction {
  type: typeof ForgotPassword_REQUEST_ERROR;
  error: string;
}

export type ForgotPasswordActionType =
  | ForgotPasswordStartingAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordErrorAction;
