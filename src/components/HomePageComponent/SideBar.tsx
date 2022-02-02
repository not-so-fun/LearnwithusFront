import React, { FC } from "react";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { RootStateType } from "../../stores";

const SideBar: FC = () => {
  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;
  const history = useHistory();
  return (
    <div className="App__Bottom__Left__SideBar">
      <div className="App__Bottom__Left__SideBar__Links">
        <div className="App__Bottom__Left__SideBar__Links__Link">Samikxya</div>
        <Link
          to="/answered"
          className="App__Bottom__Left__SideBar__Links__Link Active"
        >
          Answered Questions
        </Link>
        <Link
          to="/saved-questions"
          className="App__Bottom__Left__SideBar__Links__Link"
        >
          Saved Questions
        </Link>
        <div className="App__Bottom__Left__SideBar__Links__Link">
          Search Tutors
        </div>
      </div>
    </div>
  );
};

export default SideBar;
