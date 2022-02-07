import React, { useEffect, useState, FC } from "react";
import RightSideBar from "./RightSideBar";
import MessagesSidebar from "../components/MessagesComponent/MessagesSidebar";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { Link } from "react-router-dom";
import axios from "../axios";
import { RouteComponentProps } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

import {ChatRoomAction} from "../actions/ChatRoomAction";

import { useDispatch } from 'react-redux';

  
interface oneMessageInterface {
  chat_room_id: String;
  message: String;
  message_id: string;
  user_id: String;
  created_at: String;
}

interface messagesInterface {
  messages: [oneMessageInterface] | null;
}

const Messages: FC<RouteComponentProps<any>> = ({ match }) => {
  const [messagesState, setMessagesState] = useState<messagesInterface>({
    messages: null,
  });
  const dispatch = useDispatch();

  const { token, user_id } = useTokenAndId();
  useEffect(()=>{
    dispatch(ChatRoomAction(token));
  },[token])
  useEffect(() => {
    axios
      .get(`/chat/messages/${match.params.messageId}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setMessagesState({ ...messagesState, messages: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, match]);

  const MessageOther = () => {
    return (
      <>
        <div className="Messages__Left__Messages__Other">
          <p>
            hello how are you I am fine thank you how are you how are you how
            are you how are you how are you
          </p>
        </div>
      </>
    );
  };
  const MessageMe = () => {
    return (
      <>
        <div className="Messages__Left__Messages__Me">
          <p>
            hello how are you I am fine thank you how are you how are you how
            are you how are you how are you
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
          {messagesState &&
            messagesState.messages != null &&
            messagesState.messages.map((message: oneMessageInterface, index, array) => (
              <>
              {message.user_id === user_id ? 
              <>
         
               <MessageMe />
              </>
              :
              <div key={message?.message_id}  className="Messages__Left__Messages__Others">
              <div className="Messages__Left__Messages__Others__Image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt=""
                />
              </div>
              <div>

                <MessageOther  />
                {/* <MessageOther /> */}
              </div>
            </div>
              
            }
              </>
            ))}
        </div>
        <div className="Messages__Left__InputBox">
          <input
            type="text"
            placeholder="Aa"
            className="Messages__Left__InputBox__Input"
          />
          <div className="Messages__Left__InputBox__Logos">
            <IoMdSend className="Messages__Left__InputBox__Logos__Logo" />
          </div>
        </div>
      </div>
      <div className="Messages__Right">
        <MessagesSidebar />
      </div>
    </div>
  );
};

export default Messages;
