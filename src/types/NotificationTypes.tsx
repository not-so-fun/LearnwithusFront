import {
    NOTIFICATION_STARTED,
    NOTIFICATION_SUCCESS,
    SINGLE_NOTIFICATION_SUCCESS,
    CHANGED_NOTIFICATION_NUMBER,
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
  interface singleNotificationSuccess{
    type:typeof SINGLE_NOTIFICATION_SUCCESS;
    notification:ApproachNotificationInterface;
  }
  interface notificationLength{
    type:typeof CHANGED_NOTIFICATION_NUMBER;
    length:number;
  }
  interface NotificationError {
    type: typeof NOTIFICATION_ERROR;
    error: string;
  }
  export type NotificationTypes =
    | NotificationLoading
    | NotificationSuccess
    |singleNotificationSuccess
    |notificationLength
    | NotificationError
 
  