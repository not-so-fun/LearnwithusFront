import React, { FC } from "react";
import { Avatar } from "@mui/material";


const SideBar: FC = () => {
  return (
    <div className="HomePage__Left__SideBar">
      <div className="HomePage__Left__SideBar__Header">
     

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
