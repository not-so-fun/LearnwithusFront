import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGED_NOTIFICATION_NUMBER,
  SINGLE_NOTIFICATION_SUCCESS,
  CHAT_NOTIFICATION_NUMBER
} from "../constants/NotificationConstants";
import { CHATROOM_UPDATE } from "../constants/ChatRoomConstants";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
import { IoNotificationsSharp } from "react-icons/io5";
import Notification from "./HomeComponents/Notification";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoCreate } from "react-icons/io5";
import io from "socket.io-client";
import { BsFillChatFill } from "react-icons/bs";
import { RiFeedbackFill } from "react-icons/ri";
import MenuIcon from "@mui/icons-material/Menu";
import { Socket } from "socket.io-client";
import { URL } from "../axiosURL";
import CloseIcon from "@mui/icons-material/Close";
import axios from "../axios";
import { NotificationInterface } from "../reducers/NotificationReducer";
const socketUrl = URL + "/notification";
type NotificaitonState = {
  show: boolean;
  showProfile: boolean;
};
interface DefaultEventsMap {
  [event: string]: (...args: any[]) => void;
}

let socketOfNotification: Socket<DefaultEventsMap, DefaultEventsMap>;

const Navbar: FC = () => {
  const { notificationLength,chatNotificationLength } = useSelector<RootStateType>(
    (state) => state.Notification
  ) as NotificationInterface;
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState<NotificaitonState>({
    show: false,
    showProfile: false,
  });
  const [mobileDrop, setMobileDrop] = useState<Boolean>(false);

  const [clickedBellIcon, setClicketBellIcon] = useState<Boolean>(false);
  const [openHam, setOpenHam] = useState<Boolean>(false);

  const [showMore, setShowMore] = useState<NotificaitonState>({
    show: false,
    showProfile: false,
  });

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  const { user_id, token, image } = useTokenAndId();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/notifications", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: CHANGED_NOTIFICATION_NUMBER,
          length: response.data.length,
        });
        dispatch({
          type: CHAT_NOTIFICATION_NUMBER,
          length: response.data.chatLength,
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    socketOfNotification = io(socketUrl);
    socketOfNotification.emit("join_my_noti_room", { user_id: user_id });
    socketOfNotification.on("notification_received", (data) => {
      dispatch({
        type: CHANGED_NOTIFICATION_NUMBER,
        length: notificationLength + 1,
      });

      dispatch({
        type: SINGLE_NOTIFICATION_SUCCESS,
        notification: data.notification,
      });
    });

    socketOfNotification.on("inbox_list_update", (data) => {
      console.log(data);
      dispatch({ type: CHATROOM_UPDATE, chatRoom: data });
    });
  }, [user_id]);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };

  const mobileDeviceHandler = () => {
    setMobileDrop((prev) => !prev);
  };

  const ModelContent = () => {
    return (
      <div className={openHam ? "ModelContent" : ""}>
        <div className="ModelContent__Div">
          <div className="ModelContent__Div__Content__Top">
            <h3
              className="Navbar__Left__Hamburger__Header"
              onClick={() => history.push("/")}
            >
              LEARN101
            </h3>
            <CloseIcon
              onClick={() => {
                setOpenHam((prev) => !prev);
              }}
              className="Navbar__Left__Hamburger__Close"
            />
          </div>
          <div className="ModelContent__Div__Content">
            <Link to="/asked" className="ModelContent__Div__Content__Link">
              Asked Questions
            </Link>
          </div>
          <div className="ModelContent__Div__Content">
            <Link
              to="/saved-questions"
              className="ModelContent__Div__Content__Link"
            >
              Saved Questions
            </Link>
          </div>
          <div className="ModelContent__Div__Content">
            <Link
              to="/searchTutors"
              className="ModelContent__Div__Content__Link"
            >
              Search Tutors
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const MobileDeviceBox = () => {
    return (
      <div className="MobileDeviceBox">
        <div className="MobileDeviceBox__Border">
          <div className="MobileDeviceBox__Content">
            <div className="MobileDeviceBox__Content__Left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOR-T_D2BgjFw4fXpA40T0dgEA4m7V4QH2w&usqp=CAU"
                alt=""
                className="MobileDeviceBox__Content__Left__Image"
              />
            </div>
            <div className="MobileDeviceBox__Content__Right">
              <h3 className="MobileDeviceBox__Content__Right__H3">
                Pasang Sherpa
              </h3>
              <p className="MobileDeviceBox__Content__Right__P">
                View your profile
              </p>
            </div>
          </div>
        </div>

        <div className="MobileDeviceBox__Border">
          <div className="MobileDeviceBox__Content">
            <div className="MobileDeviceBox__Content__Left">
              <RiFeedbackFill className="MobileDeviceBox__Content__Left__Icon" />
            </div>
            <div className="MobileDeviceBox__Content__Right">
              <h3 className="MobileDeviceBox__Content__Right__H3__Below">
                Give Feedbacks
              </h3>
              <p className="MobileDeviceBox__Content__Right__P___Below">
                help use import LEARN101{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="MobileDeviceBox__Border">
          <div className="MobileDeviceBox__Content">
            <div className="MobileDeviceBox__Content__Left">
              <AiFillHome className="MobileDeviceBox__Content__Left__Icon" />
            </div>
            <div className="MobileDeviceBox__Content__Right">
              <h3 className="MobileDeviceBox__Content__Right__H3__Below">
                Home
              </h3>
            </div>
          </div>

          <div className="MobileDeviceBox__Content">
            <div className="MobileDeviceBox__Content__Left">
              <IoCreate className="MobileDeviceBox__Content__Left__Icon" />
            </div>
            <div className="MobileDeviceBox__Content__Right">
              <h3 className="MobileDeviceBox__Content__Right__H3__Below">
                Give Feedbacks
              </h3>
              <p className="MobileDeviceBox__Content__Right__P___Below">
                help use import LEARN101
              </p>
            </div>
          </div>

          <div className="MobileDeviceBox__Content">
            <div className="MobileDeviceBox__Content__Left">
              <FiLogOut className="MobileDeviceBox__Content__Left__Icon" />
            </div>
            <div className="MobileDeviceBox__Content__Right">
              <h3 className="MobileDeviceBox__Content__Right__H3__Below">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="NavMain">
      {openHam && <ModelContent />}
      {mobileDrop && <MobileDeviceBox />}

      <div className="Navbar">
        <div className="Navbar__Left">
          <p onClick={() => history.push("/")}>LEARN101</p>

          {openHam ? (
            // <CloseIcon
            //   onClick={() => {
            //     setOpenHam((prev) => !prev);
            //   }}
            //   className="Navbar__Left__Hamburger__Close"
            // />
            ""
          ) : (
            <MenuIcon
              onClick={() => {
                setOpenHam((prev) => !prev);
              }}
              className="Navbar__Left__Hamburger"
            />
          )}
        </div>
        <div className="Navbar__Links">
          <AiFillHome className="Navbar__Links__Home" onClick={()=>history.push("/")}/>
          {(userInfo && userInfo.user_id) || user_id ? (
            <>
              <IoCreate
                onClick={() => history.push("/question/ask")}
                // style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
                className="Navbar__Links__Create"
              />
               <div className="Navbar__Links__content__Icon">
                  <div className="Navbar__Links__content__Icon__Bell">
                    <BsFillChatFill
                      className="Navbar__Links__Chat"
                      onClick={() => history.push("/messages")}
                    />
                    {chatNotificationLength > 0 && (
                      <div className="Navbar__Links__content__Icon__Bell__Circle">
                        {chatNotificationLength}
                      </div>
                    )}
                  </div>
                </div>

              <FiLogOut
                onClick={handleLogout}
                className="Navbar__Links__Exit"
              />

              <div className="Navbar__Links__content">
                <div className="Navbar__Links__content__Icon">
                  <div className="Navbar__Links__content__Icon__Bell">
                    <IoNotificationsSharp
                      className="Navbar__Links__Notification"
                      onClick={() => {
                        setShowNotification({
                          show: !showNotification.show,
                          showProfile: false,
                        });
                        setClicketBellIcon(true);
                      }}
                    />
                    {notificationLength != 0 && (
                      <div className="Navbar__Links__content__Icon__Bell__Circle">
                        {notificationLength}
                      </div>
                    )}
                  </div>
                  {/* ({notificationLength}) */}
                  <div className="Navbar__Links__content__Notification">
                    {showNotification.show && <Notification />}
                  </div>
                </div>
                <div className="Navbar__Links__Content">
                  <div className="Navbar__Links__content__Avatar">
                    <Avatar
                      className="Navbar__Links__content__Avatar__Icon"
                      onClick={() =>
                        history.push(
                          `/profile/${
                            (userInfo && userInfo.user_id) || user_id
                          }`
                        )
                      }
                      alt="user"
                      src={`${(userInfo && userInfo.image) || image}`}
                      style={{ width: 40, height: 40 }}
                    />
                    <div className="Navbar__Links__content__Avatar__Icon__Arrow">
                      <ArrowDropDownCircleIcon onClick={mobileDeviceHandler} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/register" className="Navbar__Links__content">
                Register
              </Link>
              <Link
                to="/login"
                className="Navbar__Links__content Navbar__Links__center"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
