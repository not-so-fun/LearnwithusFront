import {
  ForgotPassword_REQUEST_STARTED,
  ForgotPassword_REQUEST_SUCCESS,
  ForgotPassword_REQUEST_ERROR,
} from "../constants/ForgotPasswordConstants";
import axios from "../axios";

import { ForgotPasswordActionType } from "../types/ForgotPasswordActionTypes";

import { Dispatch } from "redux";

export const ForgotPasswordAction =
  (email: string) => (dispatch: Dispatch<ForgotPasswordActionType>) => {
    dispatch({ type: ForgotPassword_REQUEST_STARTED });

    axios
      .post("/passwords/forgot-password", {
        email,
      })
      .then((response) => {
        // console.log(response.data)
        dispatch({
          type: ForgotPassword_REQUEST_SUCCESS,
          message: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response)
        dispatch({
          type: ForgotPassword_REQUEST_ERROR,
          error: error.response.data,
        });
      });
  };
