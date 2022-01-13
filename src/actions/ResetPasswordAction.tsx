import { Dispatch } from "react";
import {
  RESET_PASSWORD_REQUEST_STARTED,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_REQUEST_ERROR,
} from "../constants/ResetPasswordConstants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const ResetPasswordActions =
  (password: string, token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: RESET_PASSWORD_REQUEST_STARTED });

    axios
      .post("/passwords/reset-password", {
        password,
        token,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: RESET_PASSWORD_REQUEST_SUCCESS,message:response.data });

      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: RESET_PASSWORD_REQUEST_ERROR,error:error.response.data });

      });
  };
