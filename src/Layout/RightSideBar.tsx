import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const RightSideBar = () => {
  return (
    <div className="HomePage__Right__MainBody__Notification">
      <div className="HomePage__Right__MainBody__Notification__Below">
        <Link
          to="/question/ask"
          className="HomePage__Right__MainBody__Notification__Below__Links"
        >
          Having a doubt, ask a question?
        </Link>

      </div>
      <div className="HomePage__Right__MainBody__Notification__Active">
        <div className="HomePage__Right__MainBody__Notification__Active__Person">
          <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
            <Avatar
              alt="image"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              style={{ width: 35, height: 35 }}
              className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
            />
            <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
          </div>
          <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
            Pasang Sherpa
          </p>
        </div>
        <div className="HomePage__Right__MainBody__Notification__Active__Person">
          <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
            <Avatar
              alt="image"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              style={{ width: 35, height: 35 }}
              className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
            />
            <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
          </div>
          <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
            Pasang Sherpa
          </p>
        </div>
        <div className="HomePage__Right__MainBody__Notification__Active__Person">
          <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
            <Avatar
              alt="image"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              style={{ width: 35, height: 35 }}
              className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
            />
            <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
          </div>
          <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
            Pasang Sherpa
          </p>
          <p className="HomePage__Right__MainBody__Notification__Active__Person__Approach">
            Approach
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
