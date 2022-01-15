import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
=======
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

>>>>>>> sujan
const Navbar: FC = () => {
  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

<<<<<<< HEAD
  const {user_id}=useTokenAndId()
    const history=useHistory();
=======
  const { user_id } = useTokenAndId();
  const history = useHistory();
>>>>>>> sujan
  // console.log(user_id)

  const handleLogout = () => {
    localStorage.clear();
<<<<<<< HEAD
    history.push("/login");
    window.location.reload()

  }

  
  
=======
    history.push("/");
    window.location.reload();
  };

>>>>>>> sujan
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
              to={`/profile/${userInfo && userInfo.user_id || user_id}`}
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
        <Link to="/" className="Navbar__Links__content">
          <div className="Navbar__Links__content__Avatar">
            <Avatar
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              style={{ width: 40, height: 40 }}
            />
          </div>
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
    </div>
  );
};

export default Navbar;
