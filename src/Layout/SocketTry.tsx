import React, { FC, useEffect, useState } from "react";
import io from "socket.io-client";
import { Socket } from "socket.io-client";
import {URL} from "../axiosURL";

const socketUrl = URL+"/chat";
interface DefaultEventsMap {
  [event: string]: (...args: any[]) => void;
}

  let socketOfChat: Socket<DefaultEventsMap, DefaultEventsMap>;
  
const SocketTry: FC = () => {

  useEffect(() => {

    socketOfChat = io(socketUrl);

    socketOfChat.on("Hey", (data) => {
      console.log(data);
    });

    return ()=>{
      console.log("Disconnect")
        socketOfChat.close();
    }

  }, []);

  return <div>Socket.</div>;
};

export default SocketTry;
