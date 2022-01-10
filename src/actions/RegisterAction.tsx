import {
  REGISTER_REQUEST_STARTED,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_ERROR,
} from "../constants/RegisterConstants";

import { Dispatch } from "redux";
import axios from "../axios";
import { RegisterAction } from "../types/RegisterActionTypes";
export const Register_Action =
  (
    email: string,
    username: string,
    first_name: string,
    last_name: string,
    password: string
  ) =>
  (dispatch: Dispatch<RegisterAction>) => {
    dispatch({ type: REGISTER_REQUEST_STARTED });
    axios.post("/users", {
        email,username,first_name,last_name,password
    }).then((response :any)=>{
        console.log(response.data)
        dispatch({type:REGISTER_REQUEST_SUCCESS,message:response.data})
    }).catch((error :any)=>{
        console.log(error)
        dispatch({type:REGISTER_REQUEST_ERROR,error:error})
    })
  };
