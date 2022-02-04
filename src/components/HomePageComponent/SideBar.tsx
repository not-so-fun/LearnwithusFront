import React, { FC, useState } from "react";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { RootStateType } from "../../stores";

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
    </div>
  );
};

export default SideBar;
