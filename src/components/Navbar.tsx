import React, { FC, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoNotificationsSharp } from "react-icons/io5";
import Notification from "./HomePageComponent/Notification";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import NavbarShowMore from "./NavbarComponent/NavbarShowMore";
import { IoCreate } from "react-icons/io5";

type NotificaitonState = {
  show: boolean;
  showProfile: boolean;
};

const Navbar: FC = () => {
  const [showNotification, setShowNotification] = useState<NotificaitonState>({
    show: false,
    showProfile: false,
  });
  const [showMore, setShowMore] = useState<NotificaitonState>({
    show: false,
    showProfile: false,
  });

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  const { user_id, image } = useTokenAndId();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };
  const Dropdown:FC= (props) => {
    const dropdownmenu  = useRef <HTMLDivElement>(null);

    useEffect(() => {
      function handleOutsideClick (event: any) {
        if (
          dropdownmenu.current &&
          !dropdownmenu.current.contains(event.target)
        ) {
          setShowNotification({
            show: !showNotification.show,
            showProfile: false,
          });

        }
      }

      document.addEventListener("click", handleOutsideClick);
    }, [dropdownmenu]);
    return (
      <div className="Dropdown" ref={dropdownmenu}>
        {props.children}
      </div>
    );
  };

  return (
    <div className="Navbar">
      <div className="Navbar__Left">
        <p onClick={() => history.push("/")}>LEARN101</p>
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

            <FiLogOut
              onClick={handleLogout}
              style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
              className="Navbar__Links__Exit"
            />

            <div className="Navbar__Links__content">
              <div className="Navbar__Links__content__Icon">
                <IoNotificationsSharp
                  style={{ fontSize: 25, marginLeft: 20 }}
                  className="Navbar__Links__Notification"
                  onClick={() => {
                    setShowNotification({
                      show: !showNotification.show,
                      showProfile: false,
                    });
                  }}
                />
                <div className="Navbar__Links__content__Notification">
                  {
                  showNotification.show 
                  &&
                  <Dropdown>
                    <Notification />
                  </Dropdown>
                   }
                </div>
              </div>
              <div className="Navbar__Links__Content">
                <div className="Navbar__Links__content__Avatar">
                  <Avatar
                    onClick={() =>
                      history.push(
                        `/profile/${(userInfo && userInfo.user_id) || user_id}`
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
  );
};

export default Navbar;
