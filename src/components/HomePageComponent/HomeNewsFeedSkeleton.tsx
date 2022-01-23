import  { FC } from "react";
import Skeleton from '@mui/material/Skeleton';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HomeNewsFeedSkeleton: FC = () => {
  return (
    <div className="Profile__Box__Main__Newsfeed__Div">
      <div className="Profile__Box__Main__Newsfeed__Div__Header">
        <div className="Profile__Box__Main__Newsfeed__Div__Header__Left">
        <Skeleton variant="circular" width={40} height={40} />
        </div>
        <div className="Profile__Box__Main__Newsfeed__Div__Header__Right">
          <p>Answered: Today</p>
          <p>Views: 20k views</p>
        </div>
      </div>
      <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv">
        <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes">
        <ArrowDropUpIcon
                
                className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
              />
              <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                20k
              </h1>
              <ArrowDropDownIcon
                
                className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
              />
        </div>
        <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions">

          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__Question">
          <Skeleton variant="rectangular" style={{width:"100%"}} />
          </div>

          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__QuestionDetails">
            <p style={{color:"grey"}}>
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

export default HomeNewsFeedSkeleton;
