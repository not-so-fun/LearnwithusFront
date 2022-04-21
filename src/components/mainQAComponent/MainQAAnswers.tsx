import React, { FC, useState, useEffect } from "react";
import ReplyTextEditor from "./ReplyTextEditor";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineShareAlt,
  AiOutlineDelete
} from "react-icons/ai";
import { BiCaretUpCircle, BiCaretDownCircle } from "react-icons/bi";
import { BsFillReplyAllFill } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { answerInterface } from "../../reducers/AnsweresOnlyReducer";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import axios from "../../axios";
import MainQAReplies from "./MainQAReplies";
import { Markup } from "interweave";
import UploadImageModal from "../ReusableUIComponents/ModalImageUpload";
import DeleteAnswerModal from "../Modals/DeleteAnswerModal";

interface MainQAAnswerInterface {
  ans: answerInterface;
}
export interface lastStateInterface {
  upvote: boolean | null;
}

export interface MainRepliesInterface {
  reply_id: string;
  answer_id: string;
  upvote: boolean;
  reply: string;
  user_id: string;
  username: string;
  image: string;
  total_downvotes: string;
  total_upvotes: string;
}

const MainQAAnswers: FC<MainQAAnswerInterface> = ({ ans }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const [totalUpvotes, setTotalUpvote] = useState<number>(0);
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [owner, setOwner] = useState<boolean | null>(null);
  const [reply, showReply] = useState<boolean>(false);
  const [replies, setReplies] = useState<MainRepliesInterface[]>([]);
  const { token, user_id } = useTokenAndId();
  const [replyText, setReplyText] = useState<string>("");

  useEffect(() => {
    setUpvote(ans?.upvote!);
    setTotalUpvote(parseInt(ans.total_upvotes) - parseInt(ans.total_downvotes));
    
    setShowReplies(false);
    if (user_id === ans?.user_id) {
      setOwner(true);
    }
  }, [ans]);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  //UPVOTE_POST
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
        // console.log(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setUpvote(lastState.upvote);
      });
  };

  //GET_REPLIES
  const repliesArray = () => {
    axios
      .get(`/replies/${ans.answer_id}?set=${0}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setReplies(replies.concat(response.data));
        setShowReplies(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //POST_REPLY

  const replyAnswer = () => {
    if (replyText !== "") {
      axios
        .post(
          "/replies",
          {
            reply: replyText,
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
          // setReplies({...replies,response.data});
          setReplies((replies) => [...replies, response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setReplyText("");
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

  const handleHideReplies = () => {
    setShowReplies(false);
    setReplies([]);
  };

  return (
    <div key={ans.answer_id} className="MainQA__Answer">
      <div className="MainQA__Answer__Box">
        <div className="MainQA__Answer__Box__Top">
          <div className="MainQA__Answer__Box__Top__Left">
            <div className="MainQA__Answer__Box__Top__Left__ProfilePhoto">
              <img
                alt={ans.username}
                src={ans.image}
                className="MainQA__Answer__Box__Top__Left__ProfilePhoto__Image"
              />
            </div>
            <div className="MainQA__Answer__Box__Top__Left__AnswerData">
              <div className="MainQA__Answer__Box__Top__Left__AnswerData__UserName">
                <h2>{ans.username}</h2>
              </div>
              <div className="MainQA__Answer__Box__Top__Left__AnswerData__AnswerData">
                <p>Added an answer on March 25, 2018 at 04:50 AM</p>
              </div>
            </div>
          </div>
          <div className="MainQA__Answer__Box__Top__Right">
            <div className="MainQA__Answer__Box__Top__Right__AnswerQuality">
              <p>Best Answer</p>
            </div>
          </div>
        </div>
        {showImageModal && <UploadImageModal />}
        <div className="MainQA__Answer__Box__Main">
          <div className="MainQA__Answer__Box__Main__Likes">
            {/* Upvote started */}
            <div className="MainQA__Answer__Box__Main__Likes__Upvote">
              <AiOutlineCaretUp
                className="MainQA__Answer__Box__Main__Likes__Upvote__Logo"
                style={upvote === true ? { color: "blue" } : {}}
                onClick={handleChangeUpvoteUp}
              />
            </div>

            <div className="MainQA__Answer__Box__Main__Likes__Total">
              {totalUpvotes}
            </div>
            <div className="MainQA__Answer__Box__Main__Likes__Downvote">
              <AiOutlineCaretDown
                className="MainQA__Answer__Box__Main__Likes__Downvote__Logo"
                style={upvote === false ? { color: "red" } : {}}
                onClick={handleChangeUpvoteDown}
              />
            </div>
          </div>

          <div className="MainQA__Answer__Box__Main__AnswerText">
            <div className="MainQA__Answer__Box__Main__AnswerText__Text">
              <p>
                <Markup content={ans.answer} />
                If it is difficult fo you to quit cold turkey then try adding 2
                or 3 vegeterian or vegan meals per week to see how you feel. The
                most important thing is to read, read, read anything you can
                find on the subject to keep yourself informed and to find
                recipes so that you'll have a variety and won't get bored with
                the same old thing. I wish you Good Luck!
              </p>
            </div>
            <div className="MainQA__Answer__Box__Main__Bottom">
              <div className="MainQA__Answer__Box__Main__Bottom__Aligning">
                <div className="MainQA__Answer__Box__Main__Bottom__Function">
                  <div className="MainQA__Answer__Box__Main__Bottom__Function__Logo">
                    <BsFillReplyAllFill
                      className="MainQA__Answer__Box__Main__Bottom__Function__Logo__Logo"
                      onClick={() => {
                        showReply(!reply);
                      }}
                    />
                  </div>
                  <p className="MainQA__Answer__Box__Main__Bottom__Function__Text">
                    Reply
                  </p>
                </div>
                {
                  owner &&
                    <div className="MainQA__Answer__Box__Main__Bottom__Function">
                 
                     <div
                     className="QuestionFeed__Bottom__Left__Content__Logo"
                     onClick={handleModal}
                   >
                     <AiOutlineDelete className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
                   </div>
                   {showModal && (
                     <DeleteAnswerModal answer_id={ans.answer_id} modalHandler={handleModal} />
                   )}
                   <p
                     className="QuestionFeed__Bottom__Left__Content__Text"
                     onClick={handleModal}
                   >
                     Delete
                   </p>
                  
                  
                </div>
                }
                 
                <div className="MainQA__Answer__Box__Main__Bottom__Function">
                  <div className="MainQA__Answer__Box__Main__Bottom__Function__Logo">
                    <AiOutlineShareAlt className="MainQA__Answer__Box__Main__Bottom__Function__Logo__Logo" />
                  </div>
                  <p className="MainQA__Answer__Box__Main__Bottom__Function__Text">
                    Share
                  </p>
                </div>
                <div className="MainQA__Answer__Box__Main__Bottom__Function">
                  <div className="MainQA__Answer__Box__Main__Bottom__Function__Logo">
                    <MdReportProblem className="MainQA__Answer__Box__Main__Bottom__Function__Logo__Logo" />
                  </div>
                  <p className="MainQA__Answer__Box__Main__Bottom__Function__Text">
                    Report
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {showReplies ? (
                    <p
                      onClick={handleHideReplies}
                      className="MainQA__Answer__Box__Main__Bottom__Function__Text__RepliesIcons"
                    >
                      Replies
                      <BiCaretDownCircle size={25} />
                    </p>
                  ) : (
                    <p
                      onClick={repliesArray}
                      className="MainQA__Answer__Box__Main__Bottom__Function__Text__RepliesIcons"
                    >
                      Replies
                      <BiCaretUpCircle size={25} />
                    </p>
                  )}
                </div>
              </div>
            </div>
            {showReplies && (
              <div className="MainQA__Replies">
                {replies &&
                  replies.map((reply: MainRepliesInterface) => (
                    <div
                      key={reply.reply_id}
                      className="MainQA__Replies__Replys"
                    >
                      <MainQAReplies key={reply.reply_id} reply={reply} />
                    </div>
                  ))}
              </div>
            )}
            {reply && (
              <div>
                <ReplyTextEditor
                  replyText={replyText}
                  setReplyText={setReplyText}
                  showImageModal={showImageModal}
                  setShowImageModal={setShowImageModal}
                />

                <button
                  className="MainQA__ShowReply__Reply"
                  onClick={replyAnswer}
                >
                  <h3>Reply</h3>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainQAAnswers;
