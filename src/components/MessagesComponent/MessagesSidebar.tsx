import React, { FC } from "react";
import { RootStateType } from "../../stores";
import { useSelector } from "react-redux";
import { chatRoomInterface } from "../../reducers/ChatRoomReducer";
import { ChatRoomInterface } from "../../interfaces/messagesUsers";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const MessagesSidebar = () => {
  interface chatRoom {
    chatRoom: ChatRoomInterface;
  }
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
