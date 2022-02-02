import React, { FC, useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Markup } from "interweave";
import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import axios from "../../axios";
import { Link, useHistory } from "react-router-dom";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SavedQuestionPostAction } from "../../actions/SavedQuestionsAction";
import { SAVED_QUESTION_DELETE } from "../../constants/SavedQuestionsConstants";
import BookmarkIcon from '@mui/icons-material/Bookmark';interface quesInterface {
  question: questionFeedListInterface;
}

interface lastStateInterface {
  upvote: boolean | null;
}

const QuestionFeed: FC<quesInterface> = ({ question }) => {
  const dispatch = useDispatch();
  const [upvote, setUpvote] = useState<boolean | null>(null);
  let data =
    parseInt(question.total_upvotes) - parseInt(question.total_downvotes);
  const [totalUpvotes, setTotalUpvote] = useState<number>(data);
  const [saved, setSaved] = useState<string | null>(null);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const history = useHistory();
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const {user_id, token } = useTokenAndId();
  const [owner, setOwner] = useState<boolean | null>(null);

  useEffect(() => {
    setUpvote(question.upvote);
    setLastState({ upvote: question.upvote });
    setSaved(question.saved_question_id);
    if(user_id === question.user_id){
    
      setOwner(true);
    }
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
    if (upvote === null || upvote === false) {
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(true);
      if (upvote !== null) {
        setTotalUpvote(totalUpvotes + 2);
      } else {
        setTotalUpvote(totalUpvotes + 1);
      }
    } else {
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
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(false);
      if (upvote !== null) {
        setTotalUpvote(totalUpvotes - 2);
      } else {
        setTotalUpvote(totalUpvotes - 1);
      }
    } else {
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(null);
      if (totalUpvotes !== null) setTotalUpvote(totalUpvotes + 1);
    }
    upVote(false);
  };
  const redirectToMainQA = () => {
    history.push(`/questions/${question.question_id}`);
  };
  const SavedQuestion:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    dispatch(SavedQuestionPostAction(token, question.question_id));
    if (saved) {
      dispatch({
        type: SAVED_QUESTION_DELETE,
        question_id: question.question_id,
      });
      setSaved(null);
    } else {
      setSaved(`${question.question_id}`);
    }
  };
  const UpdateDeleteUI =()=>{
    return(<>
    <div className="QuestionFeed__Box__Top__Right__Delete">
      <Link to={`/updateQuestion/${question.question_id}`} className="QuestionFeed__Box__Top__Right__Delete__Box" >
        <h2>Update</h2>
      </Link>
      <div className="QuestionFeed__Box__Top__Right__Delete__Box">
      <h2>Delete</h2>
      </div>

    </div>
     
      
      </>)
  }

  return (
    <div className="QuestionFeed">

      <div className="QuestionFeed__Box">
        <div className="QuestionFeed__Box__Top">
          <div className="QuestionFeed__Box__Top__Left">
            <Link
              to={`/profile/${question.user_id}`}
              className="QuestionFeed__Box__Top__Left__ProfileImage"
            >
              <img
                alt={question.username}
                src={question.image}
                className="QuestionFeed__Box__Top__Left__ProfileImage__Image"
              />
              <figcaption className="QuestionFeed__Box__Top__Left__ProfileImage__Caption">
                {question.username}
              </figcaption>
            </Link>
            <div className="QuestionFeed__Box__Top__Left__AboutQuestion">
              <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top">
                <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData">
                  <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData__Time">
                    Asked: March 28 2018
                  </div>
                  <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Top__QuestionData__Title">
                    {question.topic_title}
                  </div>
                </div>
              </div>
              <div className="QuestionFeed__Box__Top__Left__AboutQuestion__Title">
                <h2>{question.title} </h2>
              </div>
            </div>
          </div>
          <div className="QuestionFeed__Box__Top__Right">
              {showUpdate && <UpdateDeleteUI/>}
              
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
              {owner && 
              <BsThreeDots 
              className="QuestionFeed__Box__Top__Right__ThreeDots"
              onClick={()=>setShowUpdate(!showUpdate)}
              />}
          </div>
        </div>
        <div className="QuestionFeed__Box__Main">
          <div className="QuestionFeed__Box__Main__Upvotes">
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
                style={upvote === false ? { color: "red" } : {}}
                onClick={handleChangeUpvoteDown}
                className="QuestionFeed__Box__Main__Upvotes__Dislikes__Logo"
              />
            </div>
          </div>

          <div className="QuestionFeed__Box__Main__AboutQuestion">
            <div className="QuestionFeed__Box__Main__AboutQuestion__Question">
              <p>
                {" "}
                <Markup content={question.question} />
                When you create a regular .NET 5 or 6 API project, you get some
                basic classes such as Program.cs and Startup.cs. I want to
                replicate that in a class project, because I want to be able to
                configure my services for dependency injection, but I don't want
                any controllers or HTTP in my project. As an example, let's
                assume I want to create a .NET 6 project using minimal
                API/hosting, and I want to check for file changes in a
                directory:
              </p>
            </div>

            <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics">
              <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left">
                <div
                  onClick={redirectToMainQA}
                  className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers"
                >
                  <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo">
                    <FaRegCommentDots className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo__Logo" />
                  </div>

                  <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Text">
                    14
                  </p>
                </div>
                <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views">
                  <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo">
                    <AiOutlineEye className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo__Logo" />
                  </div>
                  <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Text">
                    41
                  </p>
                </div>
              </div>
              {/* <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right">
                <button
                  className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right__Button"
                  onClick={redirectToMainQA}
                >
                  Answer
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFeed;
