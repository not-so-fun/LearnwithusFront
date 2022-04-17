import { Avatar } from "@mui/material";
import React,{FC} from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {ApproachNotificationInterface} from "../../reducers/NotificationReducer";
import {AcceptApproachNotificationAction, DeleteApproachNotificationAction} from "../../actions/NotificationActions";
import {DELETE_NOTIFICATION} from "../../constants/NotificationConstants";
import { useDispatch } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
interface RequestNotificationInterface {
  not: ApproachNotificationInterface
}

const ReplyNotification: FC<RequestNotificationInterface> = ({not}) => {
  const dispatch = useDispatch();
  const {token} = useTokenAndId();

  const Done = () =>{
    // dispatch({type:ADD_MESSAGE, message:`${not?.username} is now connected`})
    dispatch(AcceptApproachNotificationAction(token, not.approachnotification_id)); 
  }
  const Close =() =>{
    dispatch({type:DELETE_NOTIFICATION, notification_id:not.approachnotification_id});
    dispatch(DeleteApproachNotificationAction(token, not.approachnotification_id)); 

  }
  return (
    <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti">
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left">
        <Avatar
          alt={not?.image}
          src="image"
          style={{ width: 30, height: 30 }}
          className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Avatar"
        />
        <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Text">
          {`${not?.username}`} has replied to your answer.
        </p>
      </div>
    </div>
  );
};

export default ReplyNotification;


