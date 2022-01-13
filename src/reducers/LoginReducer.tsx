import {
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  REMOVE_ERROR
} from "../constants/LoginConstants";
import { LoginActionType } from "../types/LoginActionTypes";

export interface loginStateInterface {
  loading: boolean;
  userInfo: { user_id: string; token: string } | null;
  error: string;
}

const loginState: loginStateInterface = {
  loading: false,
  userInfo: null,
  error: "",
};

export const LoginReducer = (state = loginState, action: LoginActionType) => {
  switch (action.type) {
    case LOGIN_REQUEST_STARTED:
      return { ...state, loading: true };
    case LOGIN_REQUEST_SUCCESS:
      localStorage.setItem("userInfo",JSON.stringify(action.payload))
      return { ...state, loading: false, userInfo: action.payload, error: "" };
    case LOGIN_REQUEST_ERROR:
      return { ...state, loading: false, userInfo: null, error: action.error };
    case REMOVE_ERROR:
      return {...state,error:""}
    default:
      return { ...state };
  }
};
