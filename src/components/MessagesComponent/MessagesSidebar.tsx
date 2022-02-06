import React, { FC } from "react";
import { RootStateType } from "../../stores";
import { useSelector } from "react-redux";
import { chatRoomInterface } from "../../reducers/ChatRoom";
import { ChatRoomInterface } from "../../interfaces/messagesUsers";

const MessagesSidebar = () => {
 
  
  interface chatRoom {
    chatRoom: ChatRoomInterface;
  }
  const { chatRooms } = useSelector<RootStateType>(
    (state) => state.chatRoom
  ) as chatRoomInterface;
  const User: FC<chatRoom> = ({chatRoom}) => {
    return (
      <div className="MessagesSidebar__User">
        <div className="MessagesSidebar__User__Image">
            <img src={chatRoom.image} className="MessagesSidebar__User__Image__Img"  />
        </div>
        <div className="MessagesSidebar__User__Text">
          <h3>{chatRoom?.username}</h3>
          <div className="MessagesSidebar__User__Text__ChatInfo">
            <p>Sujan: Hello world</p>
            <p>37 mins ago</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="MessagesSidebar">
      {chatRooms.map((chatRoom) => {
        return <User chatRoom={chatRoom} />;
      })}
    </div>
  );
};

export default MessagesSidebar;
