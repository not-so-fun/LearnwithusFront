import React, { FC } from "react";

const ProfileStats: FC = () => {
  //state type

  return (
    <div className="Profile__Box__Top__Statistics">
      <div className="Profile__Box__Top__Statistics__Div">
        <div className="Profile__Box__Top__Statistics__Div__Data">
          <p>Number of questions asked</p>
          <h1>78</h1>
        </div>
        <div className="Profile__Box__Top__Statistics__Div__Data">
          <p>Number of questions answered</p>
          <h1>1200</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
