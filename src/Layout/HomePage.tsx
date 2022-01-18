import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
import NewsFeed from "../components/ProfileComponents/NewsFeed";
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
        <div className="HomePage__Left">
          <SideBar />
        </div>

        <div className="HomePage__Right">
          <div className="HomePage__Right__TopBar">
            <Navbar />
          </div>
          <div className="HomePage__Right__MainBody">
            <div className="HomePage__Right__MainBody__NewsFeed">
              {questions &&
                questions.map((question: questionFeedListInterface) => (
                  <div key={question.question_id}>
                    <NewsFeed question={question} />
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
