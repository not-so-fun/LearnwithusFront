import React from 'react';

import { FiLogOut} from "react-icons/fi";

const NavbarShowMore = () => {
  return (
  <div className="Navbar__Links__Content__Box">
    <div className="Navbar__Links__Content__Box__Content">
        <div className="Navbar__Links__Content__Box__Content__ProfilePhoto">

        </div>
        <div className="Navbar__Links__Content__Box__Content__ProfileName">
            Pasang Sherpa
        </div>

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
