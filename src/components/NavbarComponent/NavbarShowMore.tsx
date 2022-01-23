import React, { useEffect } from 'react';

import { FiLogOut} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { UserInfoInterface } from '../../reducers/LoginReducer';
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
const NavbarShowMore = () => {
  
   const {user_id} = useTokenAndId();
   console.log(user_id);
  return (
  <div className="Navbar__Links__Content__Box">
    <div className="Navbar__Links__Content__Box__Content">
        <div className="Navbar__Links__Content__Box__Content__ProfilePhoto">

        </div>
        <Link to={`/profile/${user_id}`} className="Navbar__Links__Content__Box__Content__ProfileName">
            Pasang Sherpa
        </Link>

      </div>
      <div className="Navbar__Links__Content__Box__Content">
        <div className="Navbar__Links__Content__Box__Content__Text">
            Your Answers
        </div>

        </div>
      <div className="Navbar__Links__Content__Box__Content">
         <div className="Navbar__Links__Content__Box__Content__Text">
            Your Question
        </div>

      </div>
      <div className="Navbar__Links__Content__Box__Content">
            <div className="Navbar__Links__Content__Box__Content__LogoutLogo">
            <FiLogOut className="Navbar__Links__Content__Box__Content__LogoutLogo__Logo"/>
             </div>
             <div className="Navbar__Links__Content__Box__Content__LogoutText">
                Log Out
             </div>

      </div>

  </div>
  );
};

export default NavbarShowMore;
