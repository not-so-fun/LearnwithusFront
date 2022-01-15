import React, { FC } from "react";
import { Avatar } from "@mui/material";

const NewsFeed: FC = () => {
  return (
    <div className="Profile__Box__Main__Newsfeed__Div">
      <div className="Profile__Box__Main__Newsfeed__Div__Header">
        <Avatar
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          style={{ width: 40, height: 40 }}
        />

        <p>Pasang Sherpa</p>
      </div>
      <div className="Profile__Box__Main__Newsfeed__Div__Question">
        <p>How are your dreams?</p>
      </div>
      <div className="Profile__Box__Main__Newsfeed__Div__QuestionDetails">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          sed laboriosam sit? Quisquam qui optio voluptatum et incidunt non ea
          impedit nulla ullam veniam? Tempora qui rem architecto eligendi
          voluptate animi, ut in deleniti doloremque itaque, quod illo
          voluptatibus facere saepe minus, inventore accusamus omnis vero.
          Ratione perferendis a nihil possimus ipsum optio, eligendi quae
          temporibus eius beatae. Nesciunt aperiam perspiciatis impedit
          perferendis eum rem animi voluptatum, delectus tenetur consequatur
          laboriosam vel! Quia assumenda nemo sit nam incidunt explicabo ullam.
        </p>
      </div>
    </div>
  );
};

export default NewsFeed;
