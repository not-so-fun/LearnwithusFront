import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionFeed from "../HomePageComponent/QuestionFeed";

import { AskedQuestionFeedAction } from "../../actions/MyQuestionAskedAction";
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../../components/ReusableLogicComponents/useTokenAndId";

import { RootStateType } from "../../stores";

const SavedQuestion: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, error } = useSelector<RootStateType>(
    (state) => state.askedQuestions
  ) as questionFeedInterface;

  useEffect(() => {
    document.title = "Learn with us | Answered";
  }, []);

  useEffect(() => {
    dispatch(AskedQuestionFeedAction(token));
  }, [token]);
  return (
    <>
      <div className="Answered">
        {/* <div className="HomePage__Right__MainBody"> */}
        <div className="Answered__Heading">Your Answered Question</div>
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
