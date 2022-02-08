import {
    NOTIFICATION_STARTED,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_ERROR,
  } from "../constants/NotificationConstants";
  import {ApproachNotificationInterface } from "../reducers/NotificationReducer";
  
  interface NotificationLoading {
    type: typeof NOTIFICATION_STARTED;
  }
  interface NotificationSuccess {
    type: typeof NOTIFICATION_SUCCESS;
    notification:ApproachNotificationInterface[];
  }
  interface NotificationError {
    type: typeof NOTIFICATION_ERROR;
    error: string;
  }
  export type NotificationTypes =
    | NotificationLoading
    | NotificationSuccess
    | NotificationError
 
  