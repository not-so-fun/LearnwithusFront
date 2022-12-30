import { Avatar } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { ApproachNotificationInterface } from "../../reducers/NotificationReducer";
import {
  AcceptApproachNotificationAction,
  DeleteApproachNotificationAction,
} from "../../actions/NotificationActions";
import { DELETE_NOTIFICATION } from "../../constants/NotificationConstants";
import { useDispatch } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
interface RequestNotification {
  not: ApproachNotificationInterface;
}

const AcceptedNotification: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  return (
    <div className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti">
      <Avatar
        alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        src="image"
        style={{ width: 30, height: 30 }}
        className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti__Avatar"
      />
      <p className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti__Text">
        Paul Waga accepted your approach. You can now start messaging
      </p>
    </div>
  );
};

export default AcceptedNotification;
