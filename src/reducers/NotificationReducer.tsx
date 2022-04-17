import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  SINGLE_NOTIFICATION_SUCCESS,
  CHANGED_NOTIFICATION_NUMBER,
  NOTIFICATION_ERROR,
  DELETE_NOTIFICATION
} from "../constants/NotificationConstants";
import { NotificationTypes } from "../types/NotificationTypes";
export interface ApproachNotificationInterface {
  approachnotification_id: string;
  notification_type:"answered"|"replied"|"approach_request"|"approach_accept"
  viewed: boolean;
  status: string | null;
  username: string;
  image: string;
  answer_id:string|null;
  reply_id:string|null
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
        notificationLength:action.length
      };
    case DELETE_NOTIFICATION:
      return{
        ...state,
        loading: false,
        notifications: state.notifications.filter((notification) => notification.approachnotification_id !==action.notification_id)
      }
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
