import React, { FC, useEffect } from "react";
import {profileUserDataInterface} from  "../../reducers/ProfileReducer"

interface ProfileFormInterface{
  profile_data:profileUserDataInterface
}

const ProfileForm: FC<ProfileFormInterface> = ({profile_data}) => {


  return (
    <div className="Profile__Box__Top__Information">
      <div className="Profile__Box__Top__Information__Name">
        <div className="Profile__Box__Top__Information__Name__firstName">
          <p>Firstname</p>
          <h4>{profile_data.first_name}</h4>
        </div>
        <div className="Profile__Box__Top__Information__Name__lastName">
          <p>Lastname</p>
          <h4>{profile_data.last_name}</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Location</p>
        <h4>Pulchowk Campus, Lalitpur</h4>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Interest</p>
        <h4>Web Development</h4>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Expertise</p>
        <h4>Front and Back End</h4>
      </div>
    </div>
  );
};

export default ProfileForm;
