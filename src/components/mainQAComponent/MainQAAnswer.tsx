import React, { FC } from "react";
import { BsCaretDownFill, BsCaretUpFill, BsThreeDots } from "react-icons/bs";
import { answerInterface } from "../../reducers/AnsweresOnlyReducer";

interface MainQAAnswerInterface {
  ans: answerInterface;
}
const MainQAAnswer: FC<MainQAAnswerInterface> = ({ ans }) => {
  return (
    <div key={ans.answer_id} className="MainQA__Answer">
      <div className="MainQA__Answer__AnswerLikes">
        <div className="MainQA__Answer__AnswerLikes__Box">
          <div className="MainQA__Answer__AnswerLikes__Box__Upvote">
            <BsCaretUpFill className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo" />
          </div>
          <div className="MainQA__Answer__AnswerLikes__Box__TotalLikes">
            200
          </div>
          <div className="MainQA__Answer__AnswerLikes__Box__Downvote">
            <BsCaretDownFill className="MainQA__Question__MainQuestionData__QuestionLikes__LikesBox__Downvote__Logo" />
          </div>
        </div>
      </div>
      <div className="MainQA__Answer__AnswerData">
        <div className="MainQA__Answer__AnswerData__Top">
          <div className="MainQA__Answer__AnswerData__Top__Answered">
            <div className="MainQA__Answer__AnswerData__Top__Answered__ProfilePhoto"></div>
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
