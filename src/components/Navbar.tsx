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
import NavbarShowMore from "./NavbarComponent/NavbarShowMore";
import { IoCreate } from "react-icons/io5";

type NotificaitonState = {
  show: boolean;
};


const Navbar: FC = () => {
  const [showNotification, setShowNotification] = useState<NotificaitonState>({
    show: false
  });
  const [showMore, setShowMore]= useState<boolean>(false);

  

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  const { user_id,image } = useTokenAndId();
  const history = useHistory();

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
            <IoCreate
              onClick={() => history.push("/question/ask")}
              style={{ fontSize: 25, marginLeft: 20, cursor: "pointer" }}
            />

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
              <div className="Navbar__Links__Content">
                <div className="Navbar__Links__content__Avatar">
                  <Avatar
                    alt="user"
                    src={`${(userInfo && userInfo.image) || image }`}
                    style={{ width: 40, height: 40 }}
                  />

                  <ArrowDropDownIcon 
                  className="Navbar__Links__content__Avatar__Drop" 
                  onClick={()=>{setShowMore(!showMore)}}
                  />
                </div>
                {showMore && <NavbarShowMore /> }
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
