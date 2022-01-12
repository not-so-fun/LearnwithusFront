import React, { FC } from "react";
import ProfileImageAndData from "../components/ProfileComponents/ProfileImageAndData";
import ProfileForm from "../components/ProfileComponents/ProfileForm";
import ProfileStats from "../components/ProfileComponents/ProfileStats";
import ProfileQAStatus from "../components/ProfileComponents/ProfileQAStatus";

// const answerStats = [
//   {
//     topic: "Electrostatics",
//     answers: 20,
//     ratting: "⭐️⭐️⭐️⭐️⭐️",
//   },
//   {
//     topic: "Mechanics",
//     answers: 20,
//     ratting: "⭐️⭐️⭐️⭐️⭐️",
//   },
// ];

const Profile: FC = () => {
  return (
    <div className="Profile">
      <div className="Profile__Box">
        <div className="Profile__Box__Top">
          <ProfileImageAndData />
          <ProfileForm />
          <ProfileStats />
        </div>
        <div className="Profile__Box__Main">
          <div className="Profile__Box__Main__Newsfeed"></div>
          <div className="Profile__Box__Main__SideInformation">
            <ProfileQAStatus />
            <ProfileQAStatus />
            {/* <ProfileQAStatus /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
