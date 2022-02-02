import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
// import Home from "../components/ProfileComponents/NewsFeed";
import HomeNewsFeed from "../components/HomePageComponent/HomeNewsFeed";
import { Link } from "react-router-dom";
import {
  QuestionFeedAction,
  QuestionFeedActionMore,
} from "../actions/QuestionFeedAction";
import HomeNewsFeedSkeleton from "../components/HomePageComponent/HomeNewsFeedSkeleton";
import CircleIcon from "@mui/icons-material/Circle";

import { Avatar } from "@mui/material";
import {
  questionFeedInterface,
  questionFeedListInterface,
} from "../reducers/QuestionFeedReducers";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../stores";
import QuestionFeed from "../components/HomePageComponent/QuestionFeed";
import { BeatLoaderProgress } from "../components/ReusableUIComponents/BeatLoader";
import ModalImageUpload from "../components/ReusableUIComponents/ModalImageUpload";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, questions, count, error, moreQuestionLoading } =
    useSelector<RootStateType>(
      (state) => state.questionFeed
    ) as questionFeedInterface;

  useEffect(() => {
    document.title = "Learn with us | Home";
  }, []);

  useEffect(() => {
    dispatch(QuestionFeedAction(token));
  }, [token]);
  const ShowMore = () => {
    dispatch(QuestionFeedActionMore(token, count));
  };

  return (
    <>
      <div className="HomePage">
        <div className="HomePage__Right__MainBody__NewsFeed">
          {loading && (
            <div>
              <BeatLoaderProgress size={24} color="#057777" />
            </div>
          )}
          {/* skeleton here */}
          {questions &&
            questions.map((question: questionFeedListInterface) => (
              <QuestionFeed question={question} key={question.question_id} />
            ))}
          <div className="HomePage__Right__MainBody__NewsFeed__LoadMore">
            {moreQuestionLoading ? (
              <div>
                <BeatLoaderProgress size={24} color="#057777" />
              </div>
            ) : (
              <button
                className="HomePage__Right__MainBody__NewsFeed__LoadMore__button"
                onClick={ShowMore}
              >
                <h1>Load More questions</h1>
              </button>
            )}
          </div>

          {/* loading ko thau ma extra loading rakha */}
        </div>
        <div className="HomePage__Right__MainBody__Notification">
          <div className="HomePage__Right__MainBody__Notification__Below">
            <Link
              to="/question/ask"
              className="HomePage__Right__MainBody__Notification__Below__Links"
            >
              Having a doubt, ask a question?
            </Link>
            <Link to="/saved-questions">Saved Questions</Link>
          </div>
          <div className="HomePage__Right__MainBody__Notification__Active">
            <div className="HomePage__Right__MainBody__Notification__Active__Person">
              <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
                <Avatar
                  alt="image"
                  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                  style={{ width: 35, height: 35 }}
                  className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
                />
                <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
              </div>
              <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
                Pasang Sherpa
              </p>
            </div>
            <div className="HomePage__Right__MainBody__Notification__Active__Person">
              <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
                <Avatar
                  alt="image"
                  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                  style={{ width: 35, height: 35 }}
                  className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
                />
                <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
              </div>
              <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
                Pasang Sherpa
              </p>
            </div>
            <div className="HomePage__Right__MainBody__Notification__Active__Person">
              <div className="HomePage__Right__MainBody__Notification__Active__Person__Avatar">
                <Avatar
                  alt="image"
                  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                  style={{ width: 35, height: 35 }}
                  className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
                />
                <CircleIcon className="HomePage__Right__MainBody__Notification__Active__Person__Avatar__Icon" />
              </div>
              <p className="HomePage__Right__MainBody__Notification__Active__Person__Name">
                Pasang Sherpa
              </p>
              <p className="HomePage__Right__MainBody__Notification__Active__Person__Approach">
                Approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
