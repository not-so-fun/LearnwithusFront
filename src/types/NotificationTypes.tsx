import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  SINGLE_NOTIFICATION_SUCCESS,
  CHANGED_NOTIFICATION_NUMBER,
  DELETE_NOTIFICATION,
  NOTIFICATION_ERROR,
  CHAT_NOTIFICATION_NUMBER,
  CHAT_NOTIFICATION_NUMBER_CHANGE,
} from "../constants/NotificationConstants";
import { ApproachNotificationInterface } from "../reducers/NotificationReducer";

interface NotificationLoading {
  type: typeof NOTIFICATION_STARTED;
}
interface NotificationSuccess {
  type: typeof NOTIFICATION_SUCCESS;
  notification: ApproachNotificationInterface[];
}
interface singleNotificationSuccess {
  type: typeof SINGLE_NOTIFICATION_SUCCESS;
  notification: ApproachNotificationInterface;
}
interface notificationLength {
  type: typeof CHANGED_NOTIFICATION_NUMBER;
  length: number;
}
interface deleteNotification {
  type: typeof DELETE_NOTIFICATION;
  notification_id: string;
}

interface NotificationError {
  type: typeof NOTIFICATION_ERROR;
  error: string;
}
interface chatNotificationLength {
  type: typeof CHAT_NOTIFICATION_NUMBER;
  chatLength: number;
}
interface chatNotificationLengthChange {
  type: typeof CHAT_NOTIFICATION_NUMBER_CHANGE,
  changeNumber: number
}
export type NotificationTypes =
  | NotificationLoading
  | NotificationSuccess
  | singleNotificationSuccess
  | notificationLength
  | deleteNotification
  | chatNotificationLength
  | chatNotificationLengthChange
  | NotificationError;
