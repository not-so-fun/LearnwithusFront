import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
// import Home from "../components/ProfileComponents/NewsFeed";
import HomeNewsFeed from "../components/HomePageComponent/HomeNewsFeed";
import { Link } from "react-router-dom";
import { QuestionFeedAction } from "../actions/QuestionFeedAction";
import HomeNewsFeedSkeleton from "../components/HomePageComponent/HomeNewsFeedSkeleton";
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../reducers/QuestionFeedReducers";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import QuestionFeed from "../components/HomePageComponent/QuestionFeed";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, error } = useSelector<RootStateType>(
    (state) => state.questionFeed
  ) as questionFeedInterface;

  useEffect(() => {
    document.title = "Learn with us | Home";
  }, []);

  useEffect(() => {
    dispatch(QuestionFeedAction(token));
  }, [token]);

  return (
    <>
      <div className="HomePage">
        <div className="HomePage__Right__MainBody__NewsFeed">
          {loading && <div>Loading........</div>}
          {questions &&
            questions.map((question: questionFeedListInterface) => (
              <div style={{display:"flex",justifyContent:"center"}} key={question.question_id}>
                <QuestionFeed question={question} />
              </div>
            ))}
         
            
        </div>
        <div className="HomePage__Right__MainBody__Notification">
          <div className="HomePage__Right__MainBody__Notification__Below">
            <Link
              to="/question/ask"
              className="HomePage__Right__MainBody__Notification__Below__Links"
            >
              Having a doubt, ask a question?
            </Link>
            <button>Saved Questions</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
