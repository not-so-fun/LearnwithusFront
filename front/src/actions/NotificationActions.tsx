import { Dispatch } from "redux";
import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
  SINGLE_NOTIFICATION_SUCCESS,
} from "../constants/NotificationConstants";

import axios from "../axios";
import { RootDispatchType } from "../stores";
import { NotificationTypes } from "../types/NotificationTypes";

export const GetNotificationAction =
  (token: string) => (dispatch: Dispatch<NotificationTypes>) => {
    dispatch({ type: NOTIFICATION_STARTED });

    axios
      .get(`/notifications/approach`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: NOTIFICATION_SUCCESS, notification: response.data });
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_ERROR, error: error });
      });
  };

export const AcceptApproachNotificationAction =
  (
    token: string,
    notification_id: string,
    setDoneLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  (dispatch: Dispatch<NotificationTypes>) => {
    axios
      .get(`/notifications/approach_accept/${notification_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data.notification);
        dispatch({
          type: SINGLE_NOTIFICATION_SUCCESS,
          notification: response.data.notification,
        });

        setDoneLoading(false);
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_ERROR, error: error });
      });
  };

export const DeleteApproachNotificationAction =
  (
    token: string,
    notification_id: string,
    setDeleteLoader: React.Dispatch<React.SetStateAction<boolean>>,
    setDeletedNoti: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  (dispatch: Dispatch<NotificationTypes>) => {
    axios
      .delete(`/notifications/approach_accept/${notification_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDeleteLoader(false);
        setDeletedNoti(true);
      })
      .catch((error) => {
        dispatch({ type: NOTIFICATION_ERROR, error: error });
      });
  };
