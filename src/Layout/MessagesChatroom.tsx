import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
  UIEvent,
  FC,
} from "react";
import { MESSAGE_SUCCESS } from "../constants/MessagesConstants";
import MessagesSidebar from "../components/MessagesComponent/MessagesSidebar";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { MessagesAction, LoadMessagesAction } from "../actions/MessagesAction";
import io from "socket.io-client";
import { Socket } from "socket.io-client";
import { ChatRoomAction } from "../actions/ChatRoomAction";
import { MessagesInterface } from "../reducers/MessagesReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../stores";
import { URL } from "../axiosURL";
import { CHATROOM_UPDATE } from "../constants/ChatRoomConstants";
import CircularProgress from "@mui/material/CircularProgress";
// import debounce from 'lodash.debounce';

const socketUrl = URL + "/chat";
export interface oneMessageInterface {
  chat_room_id: String;
  message: String;
  message_id: string;
  user_id: String;
  created_at: String;

  // lastElementRef: null | any
}

interface messagesInterface {
  messages: [oneMessageInterface] | null;
}
interface messageInterface {
  message: oneMessageInterface;
  firstElementRef: null | any;
}

interface DefaultEventsMap {
  [event: string]: (...args: any[]) => void;
}

let socketOfChat: Socket<DefaultEventsMap, DefaultEventsMap>;

const MessagesChatroom: FC<RouteComponentProps<any>> = ({ match }) => {
  const [text, setText] = useState("");
  const [yes, setYes] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0);

  const dispatch = useDispatch();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { loading, messages, error } = useSelector<RootStateType>(
    (state) => state.messages
  ) as MessagesInterface;
  const { token, user_id } = useTokenAndId();
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    dispatch(ChatRoomAction(token));
  }, [token]);

  useEffect(() => {
    dispatch(MessagesAction(token, match.params.messageId));
  }, [token, match]);

  useLayoutEffect(() => {
    if (yes) {
      scrollToBottom();
    }
  }, [messages]);
  useEffect(() => {
    socketOfChat = io(socketUrl);
    socketOfChat.emit("join_room", {
      chat_room_id: match.params.messageId,
      user: user_id,
    });
    socketOfChat.on("received_message", (data: oneMessageInterface) => {
      dispatch({ type: MESSAGE_SUCCESS, message: data });
    });

    return () => {
      console.log("Disconnect");
      socketOfChat.close();
    };
  }, [match]);

  const MessageOther: FC<messageInterface> = ({ message }) => {
    return (
      <>
        <div className="Messages__Left__Messages__Other">
          <p>{message.message}</p>
        </div>
      </>
    );
  };
  const MessageMe: FC<messageInterface> = ({ message }) => {
    return (
      <>
        <div className="Messages__Left__Messages__Me">
          <p>{message.message}</p>
        </div>
      </>
    );
  };

  const handleMessageSent:
    | React.FormEventHandler<HTMLFormElement>
    | undefined = (e) => {
    e.preventDefault();
    setYes(true);
    setText("");
    socketOfChat.emit("send_message", {
      chat_room_id: match.params.messageId,
      user_id: user_id,
      message: text,
    });
  };
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    let element = e.target as Element;

    if (element.scrollTop == 0) {
      setYes(false);
      if (length === Math.floor(messages.length / 15)) {
        return;
      }
      dispatch(
        LoadMessagesAction(
          token,
          match.params.messageId,
          Math.floor(messages.length / 15)
        )
      );
      setLength(length + 1);
    }
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
            <h1></h1>
          </Link>
        </div>
        <div className="Messages__Left__Messages" onScroll={handleScroll}>
          {loading && (
            <div>
              <CircularProgress />
            </div>
          )}
          {messages &&
            messages.map((message: oneMessageInterface, index) => (
              <>
                {message.user_id === user_id ? (
                  <>
                    <MessageMe
                      firstElementRef={null}
                      key={message.message_id}
                      message={message}
                    />
                  </>
                ) : (
                  <MessageOther
                    firstElementRef={null}
                    key={message.message_id}
                    message={message}
                  />
                )}
              </>
            ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleMessageSent} className="Messages__Left__InputBox">
          <input
            type="text"
            placeholder="Aa"
            className="Messages__Left__InputBox__Input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="Messages__Left__InputBox__Logos">
            <button className="Messages__Left__InputBox__Logos">
              <IoMdSend className="Messages__Left__InputBox__Logos__Logo" />
            </button>
          </div>
        </form>
      </div>

      <div className="Messages__Right">
        <MessagesSidebar />
      </div>
    </div>
  );
};

export default MessagesChatroom;
