import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGED_NOTIFICATION_NUMBER,
  SINGLE_NOTIFICATION_SUCCESS,
} from "../constants/NotificationConstants";
import { CHATROOM_UPDATE } from "../constants/ChatRoomConstants";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
import { IoNotificationsSharp } from "react-icons/io5";
import Notification from "./HomePageComponent/Notification";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoCreate } from "react-icons/io5";
import io from "socket.io-client";
import { BsFillChatFill } from "react-icons/bs";
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
  const { notificationLength } = useSelector<RootStateType>(
    (state) => state.Notification
  ) as NotificationInterface;
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState<NotificaitonState>({
    show: false,
    showProfile: false,
  });

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

  // const Dropdown: FC = (props) => {
  //   const dropdownmenu = useRef<HTMLDivElement>(null);

  // //   useEffect(() => {
  // //     function handleOutsideClick(event: any) {
  // //       if (
  // //         dropdownmenu.current &&
  // //         !dropdownmenu.current.contains(event.target)
  // //       ) {
  // //         setShowNotification({
  // //           show: !showNotification.show,
  // //           showProfile: false,
  // //         });
  // //       }
  // //     }

  // //     document.addEventListener("click", handleOutsideClick);
  // //   }, [dropdownmenu]);

  // //   return (
  // //     <div className="Dropdown" ref={dropdownmenu}>
  // //       {props.children}
  // //     </div>
  // //   );
  // // };

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

  return (
    <div className="NavMain">
      {openHam && <ModelContent />}

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
          <AiFillHome
            onClick={() => history.push("/")}
            style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
            className="Navbar__Links__Home"
          />
          {(userInfo && userInfo.user_id) || user_id ? (
            <>
              <IoCreate
                onClick={() => history.push("/question/ask")}
                style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
                className="Navbar__Links__Create"
              />

              <BsFillChatFill
                onClick={() => history.push("/messages")}
                style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
                className="Navbar__Links__Exit"
              />

              <FiLogOut
                onClick={handleLogout}
                style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
                className="Navbar__Links__Exit"
              />

              <div className="Navbar__Links__content">
                <div className="Navbar__Links__content__Icon">
                  <div className="Navbar__Links__content__Icon__Bell">
                    <IoNotificationsSharp
                      style={{ fontSize: 25, marginLeft: 20 }}
                      className="Navbar__Links__Notification"
                      onClick={() => {
                        setShowNotification({
                          show: !showNotification.show,
                          showProfile: false,
                        });
                        setClicketBellIcon(true);
                      }}
                    />
                    {!clickedBellIcon && notificationLength != 0 && (
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
