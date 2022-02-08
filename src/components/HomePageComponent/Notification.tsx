import React, { FC , useState,useEffect} from "react";
import { Avatar } from "@mui/material";
import NormalNotification from "./NormalNotification";
import RequestNotification from "./RequestNotification";
import { GetNotificationAction } from "../../actions/ProfileAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch } from "react-redux";
import {
  NOTIFICATION_STARTED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
} from "../../constants/NotificationConstants";
import axios from "../../axios";
const Notification: FC = () => {
  const { token } = useTokenAndId();
  const dispatch = useDispatch();
  const [notification, setNotification] = useState([]);
   useEffect(()=>{
    axios
    .get(`/notifications/approach`, {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      console.log(response.data);
      let noti = notification.concat(response.data);
       setNotification(noti);
    })
    .catch((error) => {
      console.log(error);
    });
   },[]);
   console.log(notification);
  return (
    <div className="HomePage__Right__MainBody__Notification__Box">
      <div className="HomePage__Right__MainBody__Notification__Box__Header">
        Notification
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__NormalNotification">
        <NormalNotification />
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification">
        <RequestNotification />
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
