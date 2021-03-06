import React, { FC, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import axios from "../../axios";
import { Link } from "react-router-dom";

interface quesInterface {
  question: questionFeedListInterface;
}

interface lastStateInterface {
  upvote: boolean | null;
}

const HomeNewsFeed: FC<quesInterface> = ({ question }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const { token } = useTokenAndId();

  useEffect(() => {
    setUpvote(question.upvote);
    setLastState({ upvote: question.upvote });
  }, [question]);

  const upVote = (upvote: boolean) => {
    axios
      .post(
        `/question-upvote`,
        {
          upvote,
          question_id: question.question_id,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        // console.log(lastState)
        setUpvote(lastState.upvote);
      });
  };

  const handleChangeUpvoteUp:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null) {
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(true);
    } else {
      if (upvote === true) {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(null);
      } else {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(true);
      }
    }
    upVote(true);
  };

  const handleChangeUpvoteDown:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null) {
      setLastState({ ...lastState, upvote: upvote });

      setUpvote(false);
    } else {
      if (upvote === false) {
        setLastState({ ...lastState, upvote: upvote });

        setUpvote(null);
      } else {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(false);
      }
    }
    upVote(false);
  };

  return (
    <div className="Profile__Box__Main__Newsfeed__Div">
      <div className="Profile__Box__Main__Newsfeed__Div__Header">
        <div className="Profile__Box__Main__Newsfeed__Div__Header__Left">
          <Avatar
            alt="user"
            src={question.image}
            style={{ width: 40, height: 40 }}
          />
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${question.user_id}`}
          >
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
          {upvote == null ? (
            <>
              <BsCaretUpFill
                onClick={handleChangeUpvoteUp}
                className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
              />
              <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                20k
              </h1>
              <BsCaretDownFill
                onClick={handleChangeUpvoteDown}
                className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
              />
            </>
          ) : (
            <>
              {upvote === true ? (
                <>
                  <BsCaretUpFill
                    onClick={handleChangeUpvoteUp}
                    style={(upvote==true)?{ color: "blue" }:{}}
                    className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
                  />
                  <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                    20k
                  </h1>
                  <BsCaretDownFill
                    onClick={handleChangeUpvoteDown}
                    className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
                  />
                </>
              ) : (
                <>
                  <BsCaretUpFill
                    onClick={handleChangeUpvoteUp}
                    className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
                  />
                  <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                    20k
                  </h1>
                  <BsCaretDownFill
                    onClick={handleChangeUpvoteDown}
                    style={{ color: "red" }}
                    className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
                  />
                </>
              )}
            </>
          )}
        </div>
        <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions">
          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__Question">
            <p>{question.title}</p>
          </div>
          <div className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Questions__QuestionDetails">
            <h3>{question.question}</h3>

            <Link
              style={{ textDecoration: "none", textEmphasisColor: "none" }}
              to={`/questions/${question && question.question_id}`}
            >
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsFeed;
