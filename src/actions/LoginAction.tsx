import {
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from "../constants/LoginConstants";
import axios from "../axios";

import { LoginActionType } from "../types/LoginActionTypes";
import { Dispatch } from "redux";

export const LoginAction =
  (email: string, password: string,history:any) =>
  (dispatch: Dispatch<LoginActionType>) => {
    dispatch({ type: LOGIN_REQUEST_STARTED });
    axios
      .post("/login", {
        email,
        password,
      })
      .then((response :any) => {
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data });
        history.push('/')

      })
      .catch((error :any) => {
        dispatch({ type: LOGIN_REQUEST_ERROR, error: error.response.data });
      });
  };
