import {
    UPDATE_PROFILE_ERROR,
    UPDATE_PROFILE_LOAD,
    UPDATE_PROFILE_SUCCESS,
  } from "../constants/UpdateProfileConstants";
  
  import { UpdateProfileAction } from "../types/UpdateProfileTypes";

  
export interface updateProfileReducerInterface{
    loading:boolean,
    error:string
}
const updateProfileState:updateProfileReducerInterface={loading:false,error:""}

export const UpdateProfileReducer=(state=updateProfileState,action:UpdateProfileAction)=>{
  switch(action.type)
  {
    case UPDATE_PROFILE_LOAD:
      return {...state,loading:true}
    case UPDATE_PROFILE_SUCCESS:
      return {...state,loading:false}
    case UPDATE_PROFILE_ERROR:
      return {...state,loading:false,error:action.error}
    default:
      return {...state}
  }

}