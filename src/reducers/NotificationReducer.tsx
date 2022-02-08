import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
} from "../constants/NotificationConstants";
import {NotificationTypes } from "../types/NotificationTypes";
export interface ApproachNotificationInterface {
  approachnotification_id: string;
  viewed: boolean;
  status:string | null;
  username: string;
  image: string;
}
export interface NotificationInterface {
  loading: boolean;
  notifications: ApproachNotificationInterface[];
  error: string | null;
}

const NotificationState: NotificationInterface = {
  loading: false,
  notifications: [],
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
          loading: true 
        };
    case NOTIFICATION_SUCCESS:
      return { 
          ...state, 
          loading: false, 
          notifications:action.notification 
        };
    case NOTIFICATION_ERROR:
      return { 
          ...state, 
          loading: false, 
          error: action.error
        };
    default:
      return { ...state };
  }
};
