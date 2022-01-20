import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "../../axios";

interface MainQAQuestionInterface {
  question: questionFeedListInterface|null;
}

interface lastStateInterface {
  upvote: boolean | null;
}



const MainQAQuestion: FC<MainQAQuestionInterface> = ({ question }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const { token } = useTokenAndId();

  useEffect(() => {
    setUpvote(question?.upvote!);
    setLastState({ upvote: question?.upvote! });
  }, [question]);

  const upVote = (upvote: boolean) => {
    axios
      .post(
        `/question-upvote`,
        {
          upvote,
          question_id: question?.question_id,
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
    <>
      {question && (
        <div className="MainQA__Question">
          <div className="MainQA__Question__Top">
            <div className="MainQA__Question__Top__ProfileData">
              <div className="MainQA__Question__Top__ProfileData__ProfilePhoto">
                <img src={question.image} className="MainQA__Question__Top__ProfileData__ProfilePhoto__Image" alt=""/>
              </div>
              <div className="MainQA__Question__Top__ProfileData__ProfileName">
                  {question.username}
              </div>
            </div>
            <div className="MainQA__Question__Top__QuestionData">
              <div className="MainQA__Question__Top__QuestionData__Views">
                <div>Answered: Today</div>
                <div>Total Views: 50 views</div>
              </div>
              <div className="MainQA__Question__Top__QuestionData__Delete">
                <BsThreeDots className="MainQA__Question__Top__QuestionData__Delete__Icon" />
              </div>
            </div>
          </div>
          <div className="MainQA__Question__MainQuestionData">
            <div className="MainQA__Question__MainQuestionData__QuestionLikes">
              <div className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox">
                {upvote === true ? (
                  <>
                    <ArrowDropUpIcon
                      onClick={handleChangeUpvoteUp}
                      style={{ color: "blue" }}
                      className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
                    />
                    <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                      20k
                    </h1>
                    <ArrowDropDownIcon
                      onClick={handleChangeUpvoteDown}
                      className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
                    />
                  </>
                ) : (
                  <>
                    <ArrowDropUpIcon
                      onClick={handleChangeUpvoteUp}
                      className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Up"
                    />
                    <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                      20k
                    </h1>
                    <ArrowDropDownIcon
                      onClick={handleChangeUpvoteDown}
                      style={{ color: "red" }}
                      className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Down"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody">
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Title">
                {question.title}
              </div>
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Body">
                {question.question}
              </div>
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Tag">
                  <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Tag__TagName">{question.topic_title}</div>
              </div>
            </div>
          </div>
        </div>
        
      )
    }
    </>
  );
};

export default MainQAQuestion;
