import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionFeed from "../HomePageComponent/QuestionFeed";

import { SavedQuestionAction, } from "../../actions/SavedQuestionsAction";
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../../reducers/QuestionFeedReducers";
import {
  questionsInterface
} from "../../reducers/SavedQuestionsReducer";
import useTokenAndId from "../../components/ReusableLogicComponents/useTokenAndId";

import { RootStateType } from "../../stores";

const SavedQuestion: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, error } = useSelector<RootStateType>(
    (state) => state.savedQuestions
  ) as questionsInterface;

  useEffect(() => {
    document.title = "Learn with us | Saved Questions";
  }, []);
  useEffect(() => {
    dispatch(SavedQuestionAction(token));
  }, [token]);
  return (
    <>
      <div className="Answered">
        {/* <div className="HomePage__Right__MainBody"> */}
        <div className="Answered__Heading">Your Saved Questions</div>
        <div className="Answered__Newsfeed">
          {questions &&
            questions.map((question: questionFeedListInterface) => (
              <QuestionFeed question={question} key={question.question_id} />
            ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SavedQuestion;