import { Dispatch } from "redux";
import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
} from "../constants/ProfileConstants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const ProfileAction =
  (user_id: string, token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: PROFILE_DATA_LOADING });

    axios
      .get(`/users/${user_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: PROFILE_DATA_SUCCESS, profile_data: response.data });
      })
      .catch((error) => {
        dispatch({ type: PROFILE_DATA_ERROR, error: error.response.data });
      });
  };
