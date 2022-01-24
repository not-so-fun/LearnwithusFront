import React, { FC, useState, useEffect } from "react";
import { BsCaretDownFill, BsCaretUpFill, BsThreeDots } from "react-icons/bs";
import { answerInterface } from "../../reducers/AnsweresOnlyReducer";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import axios from "../../axios";

interface MainQAAnswerInterface {
  ans: answerInterface;
}
interface lastStateInterface {
  upvote: boolean | null;
}

const MainQAAnswer: FC<MainQAAnswerInterface> = ({ ans }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const { token } = useTokenAndId();

  useEffect(() => {
    setUpvote(ans?.upvote!);
    setLastState({ upvote: ans?.upvote! });
  }, [ans]);

  const upVote = (upvote: boolean) => {
    axios
      .post(
        `/answer-upvote`,
        {
          upvote,
          answer_id: ans?.answer_id,
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
    <div key={ans.answer_id} className="MainQA__Answer">
      <div className="MainQA__Answer__AnswerLikes">
        <div className="MainQA__Answer__AnswerLikes__Box">
          {upvote !== undefined && (
            <>
              {upvote == null ? (
                <>
                  <BsCaretUpFill
                    onClick={handleChangeUpvoteUp}
                    className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                  />

                  <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                    20k
                  </h1>

                  <BsCaretDownFill
                    onClick={handleChangeUpvoteDown}
                    className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                  />
                </>
              ) : (
                <>
                  {upvote === true ? (
                    <>
                      <BsCaretUpFill
                        onClick={handleChangeUpvoteUp}
                        style={{ color: "blue" }}
                        className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                      />

                      <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                        20k
                      </h1>
                      <BsCaretDownFill
                        onClick={handleChangeUpvoteDown}
                        className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                      />
                    </>
                  ) : (
                    <>
                      <BsCaretUpFill
                        onClick={handleChangeUpvoteUp}
                        className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                      />
                      <h1 className="Profile__Box__Main__Newsfeed__Div__InnerDiv__Votes__Text">
                        20k
                      </h1>
                      <BsCaretDownFill
                        onClick={handleChangeUpvoteDown}
                        style={{ color: "red" }}
                        className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo"
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="MainQA__Answer__AnswerData">
        <div className="MainQA__Answer__AnswerData__Top">
          <div className="MainQA__Answer__AnswerData__Top__Answered">
            <div className="MainQA__Answer__AnswerData__Top__Answered__ProfilePhoto">
              <img
                src={ans.image}
                className="MainQA__Answer__AnswerData__Top__Answered__ProfilePhoto__Image"
                alt=""
              />
            </div>
            <div className="MainQA__Answer__AnswerData__Top__Answered__Heading">
              <p className="MainQA__Answer__AnswerData__Top__Answered__Heading__Bold">
                {ans.username}
              </p>{" "}
              replied to your question
            </div>
          </div>
          <div className="MainQA__Answer__AnswerData__Top__AnsweredData">
            <div className="MainQA__Answer__AnswerData__Top__AnsweredData__Data">
              Answered: today
            </div>
            <div className="MainQA__Answer__AnswerData__Top__AnsweredData__Delete">
              <BsThreeDots className="MainQA__Answer__AnswerData__Top__AnsweredData__Delete__Icon" />
            </div>
          </div>
        </div>
        <div className="MainQA__Answer__AnswerData__Body">{ans.answer}</div>
      </div>
    </div>
  );
};

export default MainQAAnswer;
