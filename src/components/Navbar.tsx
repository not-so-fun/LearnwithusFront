import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
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
        <Link to="/" className="Navbar__Links__content">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
