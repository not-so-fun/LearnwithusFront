import React, { FC } from "react";
import useTokenAndId from "./ReusableLogicComponents/useTokenAndId";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const { user_id } = useTokenAndId();

  return (
    <div className="Navbar">
      <div className="Navbar__Links">
        <Link to="/register" className="Navbar__Links__content">
          Register
        </Link>
        <Link
          to="/login"
          className="Navbar__Links__content Navbar__Links__center"
        >
          Login
        </Link>
        <Link to={`/profile/${user_id}`} className="Navbar__Links__content">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
