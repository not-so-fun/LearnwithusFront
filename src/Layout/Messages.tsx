import React, { FC } from "react";

import MessagesSidebar from "../components/MessagesComponent/MessagesSidebar";

import { RouteComponentProps } from "react-router-dom";

import { FiSend } from "react-icons/fi";
  


const Messages: FC<RouteComponentProps<any>> = ({ match }) => {

  return (
    <div className="Messages">
      <div className="Messages__Empty">
        <div className="Messages__Empty__Box">
          <div className="Messages__Empty__Box__Logos">
            <FiSend className="Messages__Empty__Box__Logos__Logo"/>
          </div>
          <h1 className="Messages__Empty__Box__Heading">Your messages</h1>
       
          </div>  

      
      </div>
      <div className="Messages__Right">
        <MessagesSidebar />
      </div>
    </div>
  );
};

export default Messages;
