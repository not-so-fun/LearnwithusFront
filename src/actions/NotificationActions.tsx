import { Dispatch } from "redux";
import {
    NOTIFICATION_STARTED,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_ERROR,
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
  dispatch({type:NOTIFICATION_SUCCESS, notification: response.data});
})
.catch((error) => {
   dispatch({type:NOTIFICATION_ERROR, error:error});
});
 };
