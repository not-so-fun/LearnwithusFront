import { Avatar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const RequestNotification = () => {
  return (
    <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti">
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left">
        <Avatar
          alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          src="image"
          style={{ width: 30, height: 30 }}
          className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Avatar"
        />
        <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Text">
          Jose Willson wants to connect with you.
        </p>
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right">
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject">
          <CloseIcon className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject__Icon" />
        </div>
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept">
          <DoneIcon className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept__Icon" />
        </div>
      </div>
    </div>
  );
};

export default RequestNotification;
