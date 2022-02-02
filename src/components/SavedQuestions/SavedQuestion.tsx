import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionFeed from "../HomePageComponent/QuestionFeed";

<<<<<<< HEAD
import { SavedQuestionAction, } from "../../actions/SavedQuestionsAction";
=======
import { AskedQuestionFeedAction } from "../../actions/MyQuestionAskedAction";
>>>>>>> 2a0cb4d (maked saved questions)
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../../reducers/QuestionFeedReducers";
<<<<<<< HEAD
import {
  questionsInterface
} from "../../reducers/SavedQuestionsReducer";
=======
>>>>>>> 2a0cb4d (maked saved questions)
import useTokenAndId from "../../components/ReusableLogicComponents/useTokenAndId";

import { RootStateType } from "../../stores";

const SavedQuestion: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, error } = useSelector<RootStateType>(
<<<<<<< HEAD
    (state) => state.savedQuestions
  ) as questionsInterface;

  useEffect(() => {
    document.title = "Learn with us | Saved Questions";
  }, []);
  useEffect(() => {
    dispatch(SavedQuestionAction(token));
=======
    (state) => state.askedQuestions
  ) as questionFeedInterface;

  useEffect(() => {
    document.title = "Learn with us | Answered";
  }, []);

  useEffect(() => {
    dispatch(AskedQuestionFeedAction(token));
>>>>>>> 2a0cb4d (maked saved questions)
  }, [token]);
  return (
    <>
      <div className="Answered">
        {/* <div className="HomePage__Right__MainBody"> */}
<<<<<<< HEAD
        <div className="Answered__Heading">Your Saved Questions</div>
=======
        <div className="Answered__Heading">Your Answered Question</div>
>>>>>>> 2a0cb4d (maked saved questions)
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
