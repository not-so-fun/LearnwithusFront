import React, { FC, useEffect, useState } from "react";
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
        <AiFillHome
          onClick={() => history.push("/")}
          style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
        />
        {(userInfo && userInfo.user_id) || user_id ? (
          <>
            <FiLogOut
              onClick={handleLogout}
              style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
            />

            <div className="Navbar__Links__content">
              <div className="Navbar__Links__content__Icon">
                <IoNotificationsSharp
                  style={{ fontSize: 25, marginLeft: 20 }}
                  onClick={() => {
                    setShowNotification({ show: !showNotification.show });
                  }}
                />
                <div className="Navbar__Links__content__Notification">
                  {showNotification.show && <Notification />}
                </div>
              </div>
              <Link
                to={`/profile/${(userInfo && userInfo.user_id) || user_id}`}
              >
                <div className="Navbar__Links__content__Avatar">
                  <Avatar
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    style={{ width: 40, height: 40 }}
                  />

                  <ArrowDropDownIcon className="Navbar__Links__content__Avatar__Drop" />
                </div>
              </Link>
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
