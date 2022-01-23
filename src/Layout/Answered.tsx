import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Home from "../components/ProfileComponents/NewsFeed";
import HomeNewsFeed from "../components/HomePageComponent/HomeNewsFeed";
import { Link } from "react-router-dom";
import { QuestionFeedAction } from "../actions/QuestionFeedAction";
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../reducers/QuestionFeedReducers";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";

const Answered: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, error } = useSelector<RootStateType>(
    (state) => state.questionFeed
  ) as questionFeedInterface;

  useEffect(() => {
    document.title = "Learn with us | Answered";
  }, []);

  useEffect(() => {
    dispatch(QuestionFeedAction(token));
  }, [token]);

  return (
    <>
      <div className="Answered">
          {/* <div className="HomePage__Right__MainBody"> */}
            <div className="Answered__Heading">
                Your Answered Question
            </div>
            <div className="Answered__Newsfeed">

            
              {questions &&
                questions.map((question: questionFeedListInterface) => (
                  <div key={question.question_id}>
                    <HomeNewsFeed question={question} />
                  </div>
                ))}
                </div>
          
          </div>
        {/* </div> */}
    </>
  );
};

export default Answered;


