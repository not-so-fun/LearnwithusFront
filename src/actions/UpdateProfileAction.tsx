import { Dispatch } from "redux";
import {
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_LOAD,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/UpdateProfileConstants";
import {
  EDIT_PROFILE_OFF
} from "../constants/ProfileConstants";
import {PROFILE_DATA_SUCCESS} from "../constants/ProfileConstants"
import { RootDispatchType } from "../stores";
import axios from "../axios";

export const UpdateProfileAction =
  (token: string,username:string, first_name: string, last_name: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: UPDATE_PROFILE_LOAD });

    axios
      .post("/users/update",{
          username,
          first_name,
          last_name
      }, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({type:UPDATE_PROFILE_SUCCESS})
        dispatch({type:PROFILE_DATA_SUCCESS,profile_data:response.data})
       dispatch({type:EDIT_PROFILE_OFF});
       
      })
      .catch((error) => {
        // console.log(error.response.data);
        dispatch({type:UPDATE_PROFILE_ERROR,error:error.response.data})

      });
  };
