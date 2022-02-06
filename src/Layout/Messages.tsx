import React,{useEffect} from 'react';
import RightSideBar from './RightSideBar';
import  MessagesSidebar from "../components/MessagesComponent/MessagesSidebar";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { Link } from "react-router-dom";

import {ChatRoomAction} from "../actions/ChatRoomAction";

import { IoMdSend } from "react-icons/io";
import { useDispatch } from 'react-redux';
const Messages = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();
    useEffect(()=>{
      dispatch(ChatRoomAction(token));
    },[token])

   
  const MessageOther = () =>{
      return (
          <>
          <div className="Messages__Left__Messages__Other">
            <p >
                hello how are you I am fine thank you how are you how are you how are you how are you how are you
            </p>
          </div>
          </>
      )
  } 
  const MessageMe = () =>{
    return (
        <>
        <div className="Messages__Left__Messages__Me">
          <p>
          hello how are you I am fine thank you how are you how are you how are you how are you how are you
          </p>
        </div>
        </>
    )
} 
  return (
  <div className="Messages">
    <div className="Messages__Left">
        <div className="Messages__Left__Heading">
            <div className="Messages__Left__Heading__ProfilePhoto">

            </div>
            {/* owner id is used for now later on user_id of the another user id should be used */}
            <Link 
            to={`/profile/`}
            className="Messages__Left__Heading__ProfileName" >
               <h1>Yugal Khati</h1>
            </Link>
        </div>
        <div className="Messages__Left__Messages">
          
            <MessageOther />
            <MessageOther />
            <MessageOther />
            <MessageOther />
            <MessageOther />
            
            <MessageOther />
            <MessageOther />
            <MessageOther />
            <MessageOther />
            <MessageOther />
            <MessageMe/>
            <MessageMe/>
            <MessageMe/>
            <MessageMe/>
            <MessageMe/>
            <MessageMe/>
            <MessageOther />
            <MessageMe/>
            <MessageOther />
            <MessageMe/>
            <MessageOther />
            <MessageMe/>

        </div>
        <div className="Messages__Left__InputBox">
            <input 
            type="text" 
            placeholder='Aa' 
            className="Messages__Left__InputBox__Input"
            />
            <div className="Messages__Left__InputBox__Logos">
            <IoMdSend className="Messages__Left__InputBox__Logos__Logo"/>

            </div>
        </div>

    </div>
    <div className="Messages__Right">
        <MessagesSidebar/>

    </div>
  </div>
  );
};

export default Messages;

