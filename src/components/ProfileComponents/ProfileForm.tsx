import React, { FC, useState } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import {ApproachAction }from "../../actions/ProfileAction";
import {useDispatch} from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}

const ProfileForm: FC<ProfileFormInterface> = ({ profile_data }) => {
  const {token} = useTokenAndId();
  const dispatch= useDispatch();
  const Approached = () =>{
    dispatch(ApproachAction(profile_data.user_id, token));
  }
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
        {profile_data.approachStatus === null && <button className="Profile__Box__Top__Information__Approach__Button" onClick={Approached}>Approach</button>}
        {(profile_data.approachStatus === "pending") && <button className="Profile__Box__Top__Information__Approach__Button">Pending</button>}
        {(profile_data.approachStatus === "accepted") && <button className="Profile__Box__Top__Information__Approach__Button">Message</button>}
      </div>
    </div>
  );
};

export default ProfileForm;
