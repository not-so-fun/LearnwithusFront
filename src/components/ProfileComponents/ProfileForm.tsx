import React, { FC, useState } from "react";
import {
  profileDataInterface,
  profileUserDataInterface,
} from "../../reducers/ProfileReducer";
import { useDispatch, useSelector } from "react-redux";
import { ApproachAction } from "../../actions/ApproachAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../../stores";
import { approachUserInterface } from "../../reducers/ApproachReducer";
import CircularProgress from "@mui/material/CircularProgress";
interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}
const ProfileForm: FC<ProfileFormInterface> = ({ profile_data }) => {
  const { approachStatus } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;
  const { token } = useTokenAndId();
  const { loading, error } = useSelector<RootStateType>(
    (state) => state.approaches
  ) as approachUserInterface;

  const dispatch = useDispatch();
  const Approached = () => {
    dispatch(ApproachAction(token, profile_data.user_id));
  };
  return (
    <div className="Profile__Box__Top__Information">
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Firstname</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>{profile_data.first_name}</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Lastname</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>{profile_data.last_name}</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__Approach">
        {approachStatus === null && (
          <>
            {!loading ? (
              <button
                style={{ color: "white" }}
                className="Profile__Box__Top__Information__Approach__Button"
                onClick={Approached}
              >
                Approach
              </button>
            ) : (
              <button
                style={{ color: "white" }}
                className="Profile__Box__Top__Information__Approach__Button"
              >
                <CircularProgress style={{ color: "white" }} />
              </button>
            )}
          </>
        )}
        {approachStatus === "pending" && (
          <>
            {!loading ? (
              <button
                style={{ color: "white" }}
                className="Profile__Box__Top__Information__Approach__Button"
                onClick={Approached}
              >
                Pending
              </button>
            ) : (
              <button
                style={{ color: "white" }}
                className="Profile__Box__Top__Information__Approach__Button"
              >
                <CircularProgress style={{ color: "white" }} />
              </button>
            )}
          </>
        )}
        {approachStatus === "accepted" && (
          <button className="Profile__Box__Top__Information__Approach__Button">
            Message
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
