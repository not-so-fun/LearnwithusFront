import React, { FC } from "react";
import { Avatar } from "@mui/material";

const SideBar: FC = () => {
  return (
    <div className="HomePage__Left__SideBar">
      <div className="HomePage__Left__SideBar__Header">
        <Avatar
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          style={{ width: 50, height: 50 }}
        />

        <p>Project Name</p>
      </div>
      <div className="HomePage__Left__SideBar__Links">
        <div className="HomePage__Left__SideBar__Links__Link">Samikxya</div>
        <div className="HomePage__Left__SideBar__Links__Link">
          Answered Questions
        </div>
        <div className="HomePage__Left__SideBar__Links__Link">
          Replied Questions
        </div>
        <div className="HomePage__Left__SideBar__Links__Link">
          Search Tutors
        </div>
      </div>
    </div>
  );
};

export default SideBar;
