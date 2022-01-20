import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { questionFeedListInterface } from "../../reducers/MainQuestionAnswerReducer";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
interface MainQAQuestionInterface {
  question: questionFeedListInterface | null;
}
const MainQAQuestion: FC<MainQAQuestionInterface> = ({ question }) => {
  // if(question !==null){
  return (
    <>
      {question && (
        <div className="MainQA__Question">
          <div className="MainQA__Question__Top">
            <div className="MainQA__Question__Top__ProfileData">
              <div className="MainQA__Question__Top__ProfileData__ProfilePhoto">
                {/* <img src={question.image} className='MainQA__Question__Top__ProfileData__ProfilePhoto__Image'/> */}
              </div>
              <div className="MainQA__Question__Top__ProfileData__ProfileName"></div>
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
                <div className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Upvote">
                  <BsCaretUpFill className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo" />
                </div>
                <div className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Data">
                  2k
                </div>
                <div className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote">
                  <BsCaretDownFill className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo" />
                </div>
              </div>
            </div>
            <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody">
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Title">
                hello world
              </div>
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Body"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  // }
};

export default MainQAQuestion;
