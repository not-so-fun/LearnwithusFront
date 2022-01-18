import React, { FC } from "react";
import { Avatar } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import { Link } from "react-router-dom";
interface quesInterface {
  question: questionFeedListInterface;
}
const NewsFeed: FC<quesInterface> = ({ question }) => {
  return (
    <div className="Profile__Box__Main__Newsfeed__Div">
      <div className="Profile__Box__Main__Newsfeed__Div__Header">
        <div className="Profile__Box__Main__Newsfeed__Div__Header__Left">
          <Avatar
            alt="user"
            src={question.image}
            style={{ width: 40, height: 40 }}
          />
          <Link style={{textDecoration:"none"}} to={`/profile/${question.user_id}`}>
            <p>{question.username}</p>
          </Link>
        </div>
        <div className="Profile__Box__Main__Newsfeed__Div__Header__Right">
          <p>Answered: Today</p>
          <p>Views: 20k views</p>
        </div>
      </div>
      <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv">
        <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes">
          <ArrowDropUpIcon className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up" />
          <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
            20k
          </h1>
          <ArrowDropDownIcon className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down" />
        </div>
        <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions">
          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__Question">
            <p>{question.title}</p>
          </div>
          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__QuestionDetails">
            <h3>{question.question}</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis sed laboriosam sit? Quisquam qui optio voluptatum et
              incidunt non ea impedit nulla ullam veniam? Tempora qui rem
              architecto eligendi voluptate animi, ut in deleniti doloremque
              itaque, quod illo voluptatibus facere saepe minus, inventore
              accusamus omnis vero. Ratione perferendis a nihil possimus ipsum
              optio, eligendi quae temporibus eius beatae. Nesciunt aperiam
              perspiciatis impedit perferendis eum rem animi voluptatum,
              delectus tenetur consequatur laboriosam vel! Quia assumenda nemo
              sit nam incidunt explicabo ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
