import {
  RESET_PASSWORD_REQUEST_STARTED,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_ERROR,
} from "../constants/ResetPasswordConstants";

interface ResetPasswordLoading {
  type: typeof RESET_PASSWORD_REQUEST_STARTED;
}

interface ResetPasswordSuccess {
  type: typeof RESET_PASSWORD_REQUEST_SUCCESS;
  message: string;
}

interface ResetPasswordError {
  type: typeof RESET_PASSWORD_REQUEST_ERROR;
  error: string;
}

export type ResetPasswordActions =
  | ResetPasswordLoading
  | ResetPasswordSuccess
  | ResetPasswordError;
