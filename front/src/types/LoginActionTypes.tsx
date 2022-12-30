import {
    LOGIN_REQUEST_STARTED,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,
    REMOVE_ERROR
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

interface loginRemoveErrorAction{
    type:typeof REMOVE_ERROR,
    error:""
}




export type LoginActionType=loginStartingAction|loginSuccessAction|loginErrorAction|loginRemoveErrorAction