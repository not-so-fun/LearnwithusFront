import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoNotificationsSharp } from "react-icons/io5";
import Notification from "./HomePageComponent/Notification";

type NotificaitonState = {
  show: boolean;
};

const Navbar: FC = () => {
  const [showNotification, setShowNotification] = useState<NotificaitonState>({
    show: false,
  });

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  const { user_id } = useTokenAndId();
  const history = useHistory();

  // console.log(user_id)

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };
  return (
    <div className="Navbar">
      <div className="Navbar__Links">
        {(userInfo && userInfo.user_id) || user_id ? (
          <>
            <div
              onClick={handleLogout}
              className="Navbar__Links__content Navbar__Links__center"
            >
              Logout
            </div>
            <Link
              to={`/profile/${(userInfo && userInfo.user_id) || user_id}`}
              className="Navbar__Links__content"
            >
              Profile
            </Link>
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
        <div className="Navbar__Links__content">
          <div className="Navbar__Links__content__Icon">
            {/* <Avatar
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              style={{ width: 40, height: 40 }}
            /> */}
            <IoNotificationsSharp style={{ fontSize: 25, marginLeft: 10 }} />
            {/* <div className="Navbar__Links__content__Notification">
                <Notification />
              </div> */}
            <IoNotificationsSharp
              style={{ fontSize: 25, marginLeft: 10 }}
              onClick={() => {
                setShowNotification({ show: !showNotification.show });
              }}
            />
            <div className="Navbar__Links__content__Notification">
              {showNotification.show && <Notification />}
            </div>
          </div>
          <div className="Navbar__Links__content__Avatar">
            <Avatar
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              style={{ width: 40, height: 40 }}
            />
            <ArrowDropDownIcon className="Navbar__Links__content__Avatar__Drop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
