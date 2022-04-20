import { Avatar } from "@mui/material";
import { useState } from "react";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { ApproachNotificationInterface } from "../../reducers/NotificationReducer";
import { Progress } from "../ReusableUIComponents/Spinner";
import {
  AcceptApproachNotificationAction,
  DeleteApproachNotificationAction,
} from "../../actions/NotificationActions";
import { useDispatch } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
interface RequestNotificationInterface {
  not: ApproachNotificationInterface;
}

const RequestNotification: FC<RequestNotificationInterface> = ({ not }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useTokenAndId();
  const [doneLoader, setDoneLoading] = useState<boolean>(false);
  const [deleteLoader, setDeleteLoader] = useState<boolean>(false);
  const [deletedNoti, setDeletedNoti] = useState<boolean>(false);

  const Done = () => {
    setDoneLoading(true);
    dispatch(
      AcceptApproachNotificationAction(
        token,
        not.approachnotification_id,
        setDoneLoading
      )
    );
  };
  const Close = () => {
    setDeleteLoader(true);
    dispatch(
      DeleteApproachNotificationAction(
        token,
        not.approachnotification_id,
        setDeleteLoader,
        setDeletedNoti
      )
    );
  };

  const handleMessage = () => {
    axios
      .get(`/chat/${not.approachnotified_by}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push(`/messages/${response.data.chat_room_id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti">
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left">
        <Avatar
          alt={not?.image}
          src="image"
          className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Avatar"
        />
        <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Text">
          {`${not?.username}`} wants to connect with you.
        </p>
      </div>
      {deletedNoti === true ? (
        <button>Removed</button>
      ) : (
        <>
          {not.status === "pending" ? (
            <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right">
              <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject">
                {deleteLoader == true ? (
                  <Progress size={20} />
                ) : (
                  <CloseIcon
                    className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject__Icon"
                    onClick={Close}
                  />
                )}
              </div>

              <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept">
                {doneLoader == true ? (
                  <Progress size={20} />
                ) : (
                  <DoneIcon
                    className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept__Icon"
                    onClick={Done}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right">
              <button onClick={handleMessage}>Message</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RequestNotification;
