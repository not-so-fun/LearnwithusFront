import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  SINGLE_NOTIFICATION_SUCCESS,
  CHANGED_NOTIFICATION_NUMBER,
  NOTIFICATION_ERROR,
} from "../constants/NotificationConstants";
import { NotificationTypes } from "../types/NotificationTypes";
export interface ApproachNotificationInterface {
  approachnotification_id: string;
  viewed: boolean;
  status: string | null;
  username: string;
  image: string;
}
export interface NotificationInterface {
  loading: boolean;
  notifications: ApproachNotificationInterface[];
  notificationLength:number;
  error: string | null;
}

const NotificationState: NotificationInterface = {
  loading: false,
  notifications: [],
  notificationLength: 0,
  error: "",
};

export const NotificationReducer = (
  state = NotificationState,
  action: NotificationTypes
) => {
  switch (action.type) {
    case NOTIFICATION_STARTED:
      return {
        ...state,
        loading: true,
      };
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.notification,
      };
    case SINGLE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: [...state.notifications,action.notification]
      };
    case CHANGED_NOTIFICATION_NUMBER:
      return {
        ...state,
        loading: false,
        number:action.length
      };
    case NOTIFICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
