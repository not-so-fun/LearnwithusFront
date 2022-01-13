import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import { Link, useHistory } from "react-router-dom";

const Navbar: FC = () => {
  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  const {user_id}=useTokenAndId()
    const history=useHistory()
  // console.log(user_id)

  const handleLogout=()=>{
    localStorage.clear();
    history.push("/")
    window.location.reload()

  }

  
  return (
    <div className="Navbar">
      <div className="Navbar__Links">
        {(userInfo && userInfo.user_id) || (user_id) ? (
          <>
            <div onClick={handleLogout} className="Navbar__Links__content Navbar__Links__center">
              Logout
            </div>
            <Link
              to={`/profile/${userInfo && userInfo.user_id}`}
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
      </div>
    </div>
  );
};

export default Navbar;
