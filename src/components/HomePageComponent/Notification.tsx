import React, { FC, useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import NormalNotification from "./NormalNotification";
import RequestNotification from "../NotificationComponents/RequestNotification";
import { GetNotificationAction } from "../../actions/NotificationActions";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch, useSelector } from "react-redux";

import {
  ApproachNotificationInterface,
  NotificationInterface,
} from "../../reducers/NotificationReducer";
import { RootStateType } from "../../stores";

import axios from "../../axios";
import AnswerNotification from "../NotificationComponents/AnswerNotification";
import RequestAcceptedNotification from "../NotificationComponents/RequestAccepted";
import ReplyNotification from "../NotificationComponents/RepliedNotification";
const Notification: FC = () => {
  const { token } = useTokenAndId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetNotificationAction(token));
  }, [token]);
  
  const { loading, notifications, error } = useSelector<RootStateType>(
    (state) => state.Notification
  ) as NotificationInterface;

  return (
    <div className="HomePage__Right__MainBody__Notification__Box">
      <div className="HomePage__Right__MainBody__Notification__Box__Header">
        Notification
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__NormalNotification">
        {/* <NormalNotification /> */}
        <AcceptedNotification />
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification">
        {notifications &&
          notifications.map((not) => {
            switch (not.notification_type) {
              case "answered":
                return <AnswerNotification not={not} />;
              case "approach_request":
                return <RequestNotification not={not} />;
              case "approach_accept":
                return <RequestAcceptedNotification not={not} />;
              case "replied":
                return <ReplyNotification not={not} />;
            }
          })}
      </div>
    </div>
  );
};

export default Notification;

// <div className="HomePage__Right__MainBody__Notification__Box__Header__Underline"></div>
// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv">
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header">
//     <Avatar
//       alt="user"
//       src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//       style={{ width: 55, height: 55 }}
//     />
//     <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header__Div">
//       <p>Paul Waga shared the file Andriod UI kit</p>
//       <p>an hour ago</p>
//     </div>
//   </div>
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button">
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Accept">
//       Accept
//     </button>
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Decline">
//       Decline
//     </button>
//   </div>
// </div>
// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Underline"></div>

// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv">
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header">
//     <Avatar
//       alt="user"
//       src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//       style={{ width: 55, height: 55 }}
//     />
//     <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header__Div">
//       <p>Paul Waga shared the file Andriod UI kit</p>
//       <p>an hour ago</p>
//     </div>
//   </div>
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button">
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Accept">
//       Accept
//     </button>
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Decline">
//       Decline
//     </button>
//   </div>
// </div>
// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Underline"></div>

// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv">
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header">
//     <Avatar
//       alt="user"
//       src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//       style={{ width: 55, height: 55 }}
//     />
//     <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header__Div">
//       <p>Paul Waga shared the file Andriod UI kit</p>
//       <p>an hour ago</p>
//     </div>
//   </div>
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button">
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Accept">
//       Accept
//     </button>
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Decline">
//       Decline
//     </button>
//   </div>
// </div>
// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Underline"></div>

// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv">
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header">
//     <Avatar
//       alt="user"
//       src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//       style={{ width: 55, height: 55 }}
//     />
//     <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Header__Div">
//       <p>Paul Waga shared the file Andriod UI kit</p>
//       <p>an hour ago</p>
//     </div>
//   </div>
//   <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button">
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Accept">
//       Accept
//     </button>
//     <button className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Button__Decline">
//       Decline
//     </button>
//   </div>
// </div>
// <div className="HomePage__Right__MainBody__Notification__Box__InnerDiv__Underline"></div>
