import { Avatar } from "@mui/material";
import React,{FC} from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {ApproachNotificationInterface} from "../../reducers/NotificationReducer";
import {AcceptApproachNotificationAction, DeleteApproachNotificationAction} from "../../actions/NotificationActions";
import { useDispatch } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
interface RequestNotificationInterface {
  not: ApproachNotificationInterface
}

const AnswerNotification: FC<RequestNotificationInterface> = ({not}) => {
  const dispatch = useDispatch();
  const {token} = useTokenAndId();

  return (
    <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti">
      {/* <div className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left">
        <Avatar
          alt={not?.image}
          src="image"
          style={{ width: 30, height: 30 }}
          className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Avatar"
        />
        <p className="HomePage__Right__MainBody__Notification__Box__RequestNotification__Noti__Left__Text">
          {`${not?.username}`} has answered your question.
        </p>

      </div> */}

    </div>
  );
};

export default AnswerNotification;

