import React, { FC, useState } from "react";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {RootStateType} from "../stores"
import HelpIcon from "@mui/icons-material/Help";
const SideBar: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeSaved, setActiveSaved] = useState<boolean>(false);
  const [activeTutor, setActiveTutor] = useState<boolean>(false);
  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;
  const history = useHistory();
  return (
    <div className="App__Bottom__Left__SideBar">
      <div className="App__Bottom__Left__SideBar__Links">
        <Link
          to="/asked"
          onClick={() => {
            setActive((prev) => !prev);
            setActiveTutor(false);
            setActiveSaved(false);
          }}
          className={`${
            active
              ? "App__Bottom__Left__SideBar__Links__Link Active"
              : "App__Bottom__Left__SideBar__Links__Link"
          }`}
        >
          Asked Questions
        </Link>
        <Link
          to="/saved-questions"
          onClick={() => {
            setActiveSaved((prev) => !prev);
            setActive(false);
            setActiveTutor(false);
          }}
          className={`${
            activeSaved
              ? "App__Bottom__Left__SideBar__Links__Link Active"
              : "App__Bottom__Left__SideBar__Links__Link"
          }`}
        >
          Saved Questions
        </Link>
        <Link
          to="/searchTutors"
          onClick={() => {
            setActiveTutor((prev) => !prev);
            setActive(false);
            setActiveSaved(false);
          }}
          className={`${
            activeTutor
              ? "App__Bottom__Left__SideBar__Links__Link Active"
              : "App__Bottom__Left__SideBar__Links__Link"
          }`}
        >
          Search Tutors
        </Link>
      </div>
      <div className="App__Bottom__Left__SideBar__Detail">
        <div className="App__Bottom__Left__SideBar__Detail__Item">
          <div className="App__Bottom__Left__SideBar__Detail__Item__Left">
            <HelpIcon className="App__Bottom__Left__SideBar__Detail__Item__Left__Icon" />
          </div>
          <div className="App__Bottom__Left__SideBar__Detail__Item__Right">
            <span>
              You asked&nbsp;
              <Link style={{ textDecoration: "none", color: "#1433BB" }} to="">
                How to start investing in NFT's?
              </Link>
            </span>
            <span>24 mins ago</span>
          </div>
        </div>
        <div className="App__Bottom__Left__SideBar__Detail__Item">
          <div className="App__Bottom__Left__SideBar__Detail__Item__Left">
            <HelpIcon className="App__Bottom__Left__SideBar__Detail__Item__Left__Icon" />
          </div>
          <div className="App__Bottom__Left__SideBar__Detail__Item__Right">
            <span>
              You answered&nbsp;
              <Link style={{ textDecoration: "none", color: "#1433BB" }} to="">
                How to get a black on black mercedes at the age of 25?
              </Link>
            </span>
            <span>24 mins ago</span>
          </div>
        </div>
      </div>
      <div className="App__CopyRight">
        <span>&copy; LEARN 101, All right reserved.</span>
        <Link style={{ textDecoration: "none", color: "#1433BB" }} to="/">
          Terms & Policy
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
