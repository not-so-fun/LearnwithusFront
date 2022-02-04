import { FC, useEffect, useState } from "react";
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
import DeleteQuestion from "../components/Modals/DeleteQuestion";

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
import RIghtSideBar from "./RIghtSideBar";

const HomePage: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };
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
        <RIghtSideBar />
      </div>
    </>
  );
};

export default HomePage;
