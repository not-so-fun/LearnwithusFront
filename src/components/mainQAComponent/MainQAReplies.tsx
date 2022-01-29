import React, { FC, useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import axios from "../../axios";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { MainRepliesInterface } from "./MainQAAnswers";
import { lastStateInterface } from "./MainQAAnswers";
import {Markup} from "interweave"

interface replyInterface {
  reply: MainRepliesInterface;
}

const MainQAReplies: FC<replyInterface> = ({ reply }) => {
  const { token } = useTokenAndId();
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const [totalUpvotes, setTotalUpvote] = useState<number>(
    parseInt(reply.total_upvotes) - parseInt(reply.total_downvotes)
  );


  useEffect(() => {
    setUpvote(reply?.upvote!);
    setLastState({ upvote: reply?.upvote! });
  }, [reply]);

  const upVote = (upvote: boolean) => {
    axios
      .post(
        `/reply-upvote`,
        {
          upvote,
          reply_id: reply.reply_id,
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
        // console.log(error);
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

  return (
    <div className="MainQA__Replies__Reply">
      <div className="MainQA__Answer__Box">
        <div className="MainQA__Answer__Box__Top">
          <div className="MainQA__Answer__Box__Top__Left">
            <div className="MainQA__Answer__Box__Top__Left__ProfilePhoto">
              <img
                alt={reply.username}
                src={reply.image}
                className="MainQA__Answer__Box__Top__Left__ProfilePhoto__Image"
              />
            </div>
            <div className="MainQA__Answer__Box__Top__Left__AnswerData">
              <div className="MainQA__Answer__Box__Top__Left__AnswerData__UserName">
                <h2>{reply.username}</h2>
              </div>
              <div className="MainQA__Answer__Box__Top__Left__AnswerData__AnswerData">
                <p>Added a reply on March 25, 2018 at 04:50 AM</p>
              </div>
            </div>
          </div>
          {/* <div className="MainQA__Answer__Box__Top__Right">
             <div className="MainQA__Answer__Box__Top__Right__AnswerQuality">
                 <p>Best Answer</p>
             </div>
            </div> */}
        </div>
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
                <Markup content={reply.reply}/>
                If it is difficult fo you to quit cold turkey then try adding 2
                or 3 vegeterian or vegan meals per week to see how you feel. The
                most important thing is to read, read, read anything you can
                find on the subject to keep yourself informed and to find
                recipes so that you'll have a variety and won't get bored with
                the same old thing. I wish you Good Luck!
              </p>
            </div>
            {/* <div className="MainQA__Answer__Box__Main__Bottom">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainQAReplies;
