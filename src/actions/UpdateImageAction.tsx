import { Dispatch } from "redux";

import { RootDispatchType } from "../stores";
import axios from "../axios";
import {PROFILE_DATA_SUCCESS} from "../constants/ProfileConstants";

export const UpdateImageAction =
  (token: string, image_url: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    axios
      .post(
        "/users/change-image",
        {
          image_url,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: PROFILE_DATA_SUCCESS, profile_data: response.data })
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
