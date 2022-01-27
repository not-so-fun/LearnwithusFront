import React, { FC, useEffect } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}

const ProfileForm: FC<ProfileFormInterface> = ({ profile_data }) => {
  return (
    <div className="Profile__Box__Top__Information">
      <div className="Profile__Box__Top__Information__Name">
        <div className="Profile__Box__Top__Information__Name__firstName">
          <p>Firstname</p>
          <div className="Profile__Box__Top__Information__Name__firstName__Box">
            <h4>{profile_data.first_name}</h4>
          </div>
        </div>
        <div className="Profile__Box__Top__Information__Name__lastName">
          <p>Lastname</p>
          <div className="Profile__Box__Top__Information__Name__lastName__Box">
            <h4>{profile_data.last_name}</h4>
          </div>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Location</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>Pulchowk Campus, Lalitpur</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Interest</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>Web Development</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Expertise</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>Front and Back End</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
