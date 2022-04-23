import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";

const NormalNotification = () => {
  return (
    <div className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti">
      <Avatar
        alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        src="image"
        style={{ width: 30, height: 30 }}
        className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti__Avatar"
      />
      <p className="HomePage__Right__MainBody__Notification__Box__NormalNotification__Noti__Text">
        Paul Waga commented to your question
      </p>
    </div>
  );
};

export default NormalNotification;
