import React, { useEffect, useState, FC } from "react";

import MessagesSidebar from "../components/MessagesComponent/MessagesSidebar";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { Link } from "react-router-dom";
import axios from "../axios";
import { RouteComponentProps } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

import {ChatRoomAction} from "../actions/ChatRoomAction";

import { useDispatch, useSelector} from 'react-redux';
import { GetMessagesAction } from "../actions/MessagesAction";
import { RootStateType } from "../stores";
import {MessagesInterface} from "../reducers/MessagesReducer"; 
export interface oneMessageInterface {
  chat_room_id: String;
  message: String;
  message_id: string;
  user_id: String;
  created_at: String;
}


interface messagesInterface {
  messages: [oneMessageInterface] | null;
}
interface messageInterface {
  message:oneMessageInterface;
}

const MessagesChatroom: FC<RouteComponentProps<any>> = ({ match }) => {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { loading, messages,error } =
  useSelector<RootStateType>(
    (state) => state.messages
  ) as MessagesInterface;

  const { token, user_id } = useTokenAndId();
  useEffect(()=>{
    dispatch(ChatRoomAction(token));
  },[token]);
  useEffect(() => {
    dispatch(GetMessagesAction(token, match.params.messageId));
   
  }, [token, match]);

  const MessageOther: FC<messageInterface>  = ({message}) => {
    return (
      <>
        <div className="Messages__Left__Messages__Other">
          <p>
            {message.message}
          </p>
        </div>
      </>
    );
  };
  const MessageMe: FC<messageInterface>  = ({message}) => {
    return (
      <>
        <div className="Messages__Left__Messages__Me">
          <p>
          {message.message}
          </p>
        </div>
      </>
    );
  };
  return (
    <div className="Messages">
      <div className="Messages__Left">
        <div className="Messages__Left__Heading">
          <div className="Messages__Left__Heading__ProfilePhoto"></div>
          {/* owner id is used for now later on user_id of the another user id should be used */}
          <Link
            to={`/profile/${user_id}`}
            className="Messages__Left__Heading__ProfileName"
          >
            <h1>Yugal Khati</h1>
          </Link>
        </div>
        <div className="Messages__Left__Messages">
          {messages
           &&
            messages.map((message: oneMessageInterface, index, array) => (
              <>
              {message.user_id === user_id ? 
              <>
         
               <MessageMe key={message.message_id} message={message}/>
              </>
              :
                <MessageOther key={message.message_id} message={message}/>
            }
              </>
            ))}
        </div>
        <div className="Messages__Left__InputBox">
          <input
            type="text"
            placeholder="Aa"
            className="Messages__Left__InputBox__Input"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          <div className="Messages__Left__InputBox__Logos">
            <IoMdSend className="Messages__Left__InputBox__Logos__Logo" onClick={()=>setText("")}/>
          </div>
        </div>
      </div>
      <div className="Messages__Right">
        <MessagesSidebar />
      </div>
    </div>
  );
};

export default MessagesChatroom;