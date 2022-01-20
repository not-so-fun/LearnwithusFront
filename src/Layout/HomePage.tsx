import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
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
          {/* <div className="HomePage__Right__MainBody"> */}
            <div className="HomePage__Right__MainBody__NewsFeed">
              {questions &&
                questions.map((question: questionFeedListInterface) => (
                  <div key={question.question_id}>
                    <HomeNewsFeed question={question} />
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
        {/* </div> */}
    </>
  );
};

export default HomePage;
