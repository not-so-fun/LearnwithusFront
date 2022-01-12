import React, { FC } from "react";

// type DummyProp = {
//   ansStats: {
//     topic: string;
//     answers: number;
//     ratting: string;
//   }[];
// };

const ProfileQAStatus: FC = () => {
  //state type

  return (
    <div className="Profile__Box__Main__SideInformation__Status">
      <h1>Asnwer Status</h1>
      <div className="Profile__Box__Main__SideInformation__Status__InnerDiv">
        <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box">
          <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box__Header">
            Topic
          </div>
          <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box__Stats">
            Electrostatics
          </div>
          <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box__Stats">
            Electrostatics
          </div>
        </div>
        <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box">
          <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box__Header">
            Answers
          </div>
        </div>
        <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box">
          <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Box__Header">
            Rating
          </div>
        </div>

        {/* <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Header">
          Topic
        </div>
        <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Header">
          Answer
        </div>
        <div className="Profile__Box__Main__SideInformation__Status__InnerDiv__Header">
          Rating
        </div> */}
      </div>
    </div>
  );
};

export default ProfileQAStatus;
