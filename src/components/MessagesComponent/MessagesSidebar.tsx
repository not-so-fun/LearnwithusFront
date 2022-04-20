import React, { FC } from "react";
import { RootStateType } from "../../stores";
import { useSelector } from "react-redux";
import { chatRoomInterface } from "../../reducers/ChatRoomReducer";
import { ChatRoomInterface } from "../../interfaces/messagesUsers";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
interface chatRoom {
  chatRoom: ChatRoomInterface;
}
interface paraStr {
  lastmsg: string;
}
const num = 10;

const TruncateP: FC<paraStr> = ({ lastmsg }) => {
  if (lastmsg.length > num) {
    lastmsg = lastmsg.slice(0, num) + ".....";
  }
  return <p>{lastmsg}</p>;
};

const TruncatePBold: FC<paraStr> = ({ lastmsg }) => {
  if (lastmsg.length > num) {
    lastmsg = lastmsg.slice(0, num) + ".....";
  }
  return <b>{lastmsg}</b>;
};

const User: FC<chatRoom> = ({ chatRoom }) => {
  return (
    <Link
      to={`/messages/${chatRoom.chat_room_id}`}
      className="MessagesSidebar__User"
    >
      <div className="MessagesSidebar__User__Image">
        <Avatar src={chatRoom.image} sx={{ width: 60, height: 60 }} />
      </div>
      <div className="MessagesSidebar__User__Text">
        <h3>{chatRoom?.username}</h3>
        <div className="MessagesSidebar__User__Text__ChatInfo">
          {chatRoom.last_message_owner === chatRoom.user_id ? (
            <>
              {chatRoom.last_message_seen ? (
                <>
                  <p>{chatRoom.owner_username} : </p>
                  <TruncateP lastmsg={chatRoom.last_message} />
                </>
              ) : (
                <>
                  <b>{chatRoom.owner_username} : </b>
                  <TruncatePBold lastmsg={chatRoom.last_message} />
                </>
              )}
            </>
          ) : (
            <>
              <p>You : </p>
              <TruncateP lastmsg={chatRoom.last_message} />
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

const MessagesSidebar = () => {
  const { chatRooms } = useSelector<RootStateType>(
    (state) => state.chatRoom
  ) as chatRoomInterface;
  const User: FC<chatRoom> = ({ chatRoom }) => {
    
    return (
      <Link
        to={`/messages/${chatRoom.chat_room_id}`}
        className="MessagesSidebar__User"
      >
        <div className="MessagesSidebar__User__Image">
          <Avatar src={chatRoom.image} sx={{ width: 60, height: 60 }} />
        </div>
        <div className="MessagesSidebar__User__Text">
          <h3>{chatRoom?.username}</h3>
          <div className="MessagesSidebar__User__Text__ChatInfo">
            <p>{chatRoom.last_message}</p>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div className="MessagesSidebar">
      {chatRooms.map((chatRoom) => {
        return <User key={chatRoom.chat_room_id} chatRoom={chatRoom} />;
      })}
    </div>
  );
};

export default MessagesSidebar;
