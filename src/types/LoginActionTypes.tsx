import {
    LOGIN_REQUEST_STARTED,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,
  } from "../constants/LoginConstants";


interface loginStartingAction{
    type:typeof LOGIN_REQUEST_STARTED
}

interface loginSuccessAction{
    type:typeof LOGIN_REQUEST_SUCCESS,
    payload:{id:string,token:string}
}

interface loginErrorAction{
    type:typeof LOGIN_REQUEST_ERROR,
    error:string
}

export type LoginActionType=loginStartingAction|loginSuccessAction|loginErrorAction