import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Markup } from "interweave";

import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";

import axios from "../../axios";

import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineEye,
  AiOutlineDelete,
} from "react-icons/ai";

import { MdMessage, MdReportProblem } from "react-icons/md";

import {
  BsPencil,
  BsShare,
  BsFacebook,
  BsTwitter,
  BsBookmark,
  BsThreeDots,
} from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SavedQuestionPostAction } from "../../actions/SavedQuestionsAction";
import { SAVED_QUESTION_DELETE } from "../../constants/SavedQuestionsConstants";
import { DeleteQuestionAction } from "../../actions/AskQuestionAction";
import { Server } from "http";
import DeleteQuestion from "../Modals/DeleteQuestion";

interface MainQAQuestionInterface {
  question: questionFeedListInterface | null;
}

interface lastStateInterface {
  upvote: boolean | null;
}

const MainQAQuestion: FC<MainQAQuestionInterface> = ({ question }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [totalUpvotes, setTotalUpvote] = useState<number>(0);
  const [saved, setSaved] = useState<string | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const [owner, setOwner] = useState<boolean | null>(null);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const { token, user_id } = useTokenAndId();

  const dispatch = useDispatch();

  useEffect(() => {
    setUpvote(question?.upvote!);
    setLastState({ upvote: question?.upvote! });

    if (user_id === question?.user_id) {
      setOwner(true);
    }
    if (question !== null) {
      setSaved(question?.saved_question_id);
      setTotalUpvote(
        parseInt(question?.total_upvotes) - parseInt(question?.total_downvotes)
      );
    }
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
        setUpvote(lastState.upvote);
      });
  };

  const handleChangeUpvoteUp:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null || upvote === false) {
      console.log(typeof totalUpvotes);
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(true);
      if (upvote !== null) {
        console.log(typeof totalUpvotes);
        setTotalUpvote(totalUpvotes + 2);
      } else {
        console.log(typeof totalUpvotes);

        setTotalUpvote(totalUpvotes + 1);
      }
    } else {
      console.log(typeof totalUpvotes);
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(null);
      setTotalUpvote(totalUpvotes - 1);
    }
    upVote(true);
  };

  const handleChangeUpvoteDown:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null || upvote === true) {
      console.log(typeof totalUpvotes);
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(false);
      if (upvote !== null) {
        console.log(typeof totalUpvotes);
        setTotalUpvote(totalUpvotes - 2);
      } else {
        console.log(typeof totalUpvotes);
        setTotalUpvote(totalUpvotes - 1);
      }
    } else {
      console.log(typeof totalUpvotes);
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(null);
      if (totalUpvotes !== null) setTotalUpvote(totalUpvotes + 1);
    }
    upVote(false);
  };
  const SavedQuestion:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (question) {
      dispatch(SavedQuestionPostAction(token, question?.question_id));
    }
    if (saved && question) {
      dispatch({
        type: SAVED_QUESTION_DELETE,
        question_id: question.question_id,
      });
      setSaved(null);
    } else {
      setSaved(`${question?.question_id}`);
    }
  };
  const deleteQuestion = () => {
    if (question) {
      dispatch(DeleteQuestionAction(token, question?.question_id));
    }
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const UpdateDeleteUI = () => {
    return (
      <>
        <div className="QuestionFeed__Box__Top__Right__Delete">
          <Link
            to={`/updateQuestion/${question?.question_id}`}
            className="QuestionFeed__Box__Top__Right__Delete__Box"
          >
            <h2>Update</h2>
          </Link>
          <div
            className="QuestionFeed__Box__Top__Right__Delete__Box"
            onClick={deleteQuestion}
          >
            <h2>Delete</h2>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {question && (
        <div className="QuestionFeed" key={question?.question_id}>
          <div className="QuestionFeed__Box">
            <div className="QuestionFeed__Box__Top">
              <div className="QuestionFeed__Box__Top__Left">
                <Link
                  to={`/profile/${question?.user_id}`}
                  className="QuestionFeed__Box__Top__Left__ProfileImage"
                >
                  <img
                    alt={question?.username}
                    src={question.image}
                    className="QuestionFeed__Box__Top__Left__ProfileImage__Image"
                  />
                  <figcaption className="QuestionFeed__Box__Top__Left__ProfileImage__Caption">
                    {question?.username}
                  </figcaption>
                </Link>
                <div className="QuestionFeed__Box__Top__Left__AboutQuestion">
                  <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top">
                    <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData">
                      <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData__Time">
                        Asked: March 28 2018
                      </div>
                      <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData__Title">
                        {question?.topic_title}
                      </div>
                    </div>
                  </div>
                  <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Title">
                    <h2>{question?.title} </h2>
                  </div>
                </div>
              </div>
              <div className="QuestionFeed__Box__Top__Right">
                {showUpdate && <UpdateDeleteUI />}

                {saved ? (
                  <FaBookmark
                    className="QuestionFeed__Box__Top__Right__Primary"
                    onClick={SavedQuestion}
                  />
                ) : (
                  <BsBookmark
                    className="QuestionFeed__Box__Top__Right__Bookmark"
                    onClick={SavedQuestion}
                  />
                )}
                {owner && (
                  <BsThreeDots
                    className="QuestionFeed__Box__Top__Right__ThreeDots"
                    onClick={() => setShowUpdate(!showUpdate)}
                  />
                )}
              </div>
            </div>
            <div className="QuestionFeed__Box__Main">
              <div className="QuestionFeed__Box__Main__Upvotes">
                {/* {upvote == null ? (
                          <> */}
                <div className="QuestionFeed__Box__Main__Upvotes__Likes">
                  <AiFillCaretUp
                    onClick={handleChangeUpvoteUp}
                    style={upvote === true ? { color: "blue" } : {}}
                    className="QuestionFeed__Box__Main__Upvotes__Likes__Logo"
                  />
                </div>
                <div className="QuestionFeed__Box__Main__Upvotes__Box">
                  <h1>{totalUpvotes}</h1>
                </div>
                <div className="QuestionFeed__Box__Main__Upvotes__Dislikes">
                  <AiFillCaretDown
                    onClick={handleChangeUpvoteDown}
                    style={upvote === false ? { color: "red" } : {}}
                    className="QuestionFeed__Box__Main__Upvotes__Dislikes__Logo"
                  />
                </div>
              </div>

              <div className="QuestionFeed__Box__Main__AboutQuestion">
                <div className="QuestionFeed__Box__Main__AboutQuestion__Question">
                  <div>
                    {" "}
                    <Markup content={question?.question} />
                  </div>
                </div>
                <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics">
                  <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left">
                    <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers">
                      <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo">
                        <MdMessage className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo__Logo" />
                      </div>
                      <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Text">
                        18 Answers
                      </p>
                    </div>
                    <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views">
                      <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo">
                        <AiOutlineEye className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo__Logo" />
                      </div>
                      <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Text">
                        412 views
                      </p>
                    </div>
                  </div>
                  {/* <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right">
                    <button className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right__Button">
                      Answer
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionFeed__Bottom">
            <div className="QuestionFeed__Bottom__Left">
              <div className="QuestionFeed__Bottom__Left__Content">
                <div className="QuestionFeed__Bottom__Left__Content__Logo">
                  <BsPencil className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
                </div>
                <p className="QuestionFeed__Bottom__Left__Content__Text">
                  Edit
                </p>
              </div>
              <div className="QuestionFeed__Bottom__Left__Content">
                <div
                  className="QuestionFeed__Bottom__Left__Content__Logo"
                  onClick={handleModal}
                >
                  <AiOutlineDelete className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
                </div>
                {showModal && <DeleteQuestion modalHandler={handleModal} />}
                <p
                  className="QuestionFeed__Bottom__Left__Content__Text"
                  onClick={handleModal}
                >
                  Delete
                </p>
              </div>
              <div className="QuestionFeed__Bottom__Left__Content">
                <div className="QuestionFeed__Bottom__Left__Content__Logo">
                  <MdReportProblem className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
                </div>
                <p className="QuestionFeed__Bottom__Left__Content__Text">
                  Report
                </p>
              </div>
            </div>
            <div className="QuestionFeed__Bottom__Right">
              <div className="QuestionFeed__Bottom__Right__Content">
                <div className="QuestionFeed__Bottom__Right__Content__Logo">
                  <BsShare className="QuestionFeed__Bottom__Right__Content__Logo" />
                </div>
                <p className="QuestionFeed__Bottom__Right__Content__Text">
                  Share
                </p>
              </div>
              <div className="QuestionFeed__Bottom__Right__Content">
                <BsFacebook className="QuestionFeed__Bottom__Right__Content__Logos" />
              </div>
              <div className="QuestionFeed__Bottom__Right__Content">
                <BsTwitter className="QuestionFeed__Bottom__Right__Content__Logos" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainQAQuestion;
