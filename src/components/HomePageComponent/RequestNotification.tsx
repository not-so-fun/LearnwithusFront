import { Avatar } from "@mui/material";
import React,{FC} from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {ApproachNotificationInterface} from "../../reducers/NotificationReducer";
import {AcceptApproachNotificationAction, DeleteApproachNotificationAction} from "../../actions/NotificationActions";
import { useDispatch } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
interface RequestNotification {
  not: ApproachNotificationInterface
}

const RequestNotification: FC<RequestNotification> = ({not}) => {
  const dispatch = useDispatch();
  const {token} = useTokenAndId();

  const Done = () =>{
    dispatch(AcceptApproachNotificationAction(token, not.approachnotification_id)); 
  }
  const Close =() =>{
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
          {`${not?.username}`} wants to connect with you.
        </p>
      </div>
      <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right">
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject">
          <CloseIcon className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Reject__Icon" onClick={Close}/>
        </div>
        <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept">
          <DoneIcon className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Right__Accept__Icon" onClick={Done}/>
        </div>
      </div>
    </div>
  );
};

export default RequestNotification;
