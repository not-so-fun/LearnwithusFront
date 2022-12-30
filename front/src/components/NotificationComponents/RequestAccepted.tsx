import { Avatar } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { ApproachNotificationInterface } from "../../reducers/NotificationReducer";
import axios from "../../axios";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch } from "react-redux";
import { NOTIFICATION_VIEW } from "../../constants/NotificationConstants";
interface RequestNotificationInterface {
  not: ApproachNotificationInterface;
}

const RequestAcceptedNotification: FC<RequestNotificationInterface> = ({
  not,
}) => {
  const { token } = useTokenAndId();
  const dispatch = useDispatch();

  const viewNotification = () => {
    axios
      .get(`/notifications/view/${not.approachnotification_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === true) {
          dispatch({
            type: NOTIFICATION_VIEW,
            notification_id: not.approachnotification_id,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {not.viewed === false ? (
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti">
          <div
            onClick={viewNotification}
            className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left"
          >
            <Avatar
              alt={not?.image}
              src="image"
              style={{ width: 30, height: 30 }}
              className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Avatar"
            />
            <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Text">
              {`${not?.username}`} has accepted your request dude.
            </p>
          </div>
        </div>
      ) : (
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__NotiViewed">
          <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__NotiViewed__Left">
            <Avatar
              alt={not?.image}
              src="image"
              style={{ width: 30, height: 30 }}
              className="HomePage__Right__MainBody__Notification__Box__RequestNotification__NotiViewed__Left__Avatar"
            />
            <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__NotiViewed__Left__Text">
              {`${not?.username}`} has accepted your request dude.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestAcceptedNotification;
