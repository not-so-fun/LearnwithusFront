import { Dispatch } from "redux";
import axios from "../axios";
import {
  APPROACH_REQUEST_ERROR,
  APPROACH_REQUST_SUCCESS,
  APPROACH_START,
} from "../constants/ApproachConstants";
import { CHANGE_PROFILE_APPROACH_STATUS } from "../constants/ProfileConstants";
import { RootDispatchType } from "../stores";

export const ApproachAction =
  (token: string, user_id: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: APPROACH_START });
    axios
      .post(
        "/notifications/approach",
        {
          notified_to: user_id,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({ type: APPROACH_REQUST_SUCCESS });
        if (response.data == "approach") {
          dispatch({ type: CHANGE_PROFILE_APPROACH_STATUS, status: null });
        } else {
          dispatch({
            type: CHANGE_PROFILE_APPROACH_STATUS,
            status: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
