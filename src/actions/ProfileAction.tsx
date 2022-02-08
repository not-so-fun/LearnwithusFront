import { Dispatch } from "redux";
import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
  RATE_PROFILE_STARTED,
  RATE_PROFILE_SUCCESS,
  RATE_PROFILE_ERROR,
} from "../constants/ProfileConstants";
import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
} from "../constants/NotificationConstants";
import axios from "../axios";
import { RootDispatchType } from "../stores";

export const ProfileAction =
  (user_id: string, token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: PROFILE_DATA_LOADING });
    console.log(user_id);
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

export const rateUserAction =
  (rate: number, user_id: string, token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: RATE_PROFILE_STARTED });
    axios
      .post(
        `/rate-users/${user_id}`,
        { rating: rate },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: RATE_PROFILE_SUCCESS });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({
          type: RATE_PROFILE_ERROR,
          ratingError: error.response.data,
        });
      });
  };
export const ApproachAction =
  (user_id: string, token: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    axios
      .post(
        `/notifications/approach`,
        { notified_to: user_id },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {})
      .catch((error) => {
        // dispatch({ type: RATE_PROFILE_ERROR, ratingError: error.response.data });
      });
  };

export const GetNotificationAction =
  (token: string) => (dispatch: Dispatch<RootDispatchType>) => {
   
  };
