import React, { FC, useEffect, useState, lazy, Suspense } from "react";
import { RouteComponentProps } from "react-router-dom";
import MainQAQuestion from "../components/mainQAComponent/MainQAQuestion";
import MainQAAnswer from "../components/mainQAComponent/MainQAAnswer";
import { useDispatch, useSelector } from "react-redux";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { MainQuestionAnswerAction } from "../actions/MainQuestionAnswerAction";
import { AnswersOnlyAction } from "../actions/AnswersOnlyAction";
import { RootStateType } from "../stores";
import { UserInfoInterface } from "../reducers/LoginReducer";
import { questionFeedListInterface } from "../reducers/QuestionFeedReducers";
import { answersInterface } from "../reducers/AnsweresOnlyReducer";
import { MainQuestionAnswerInterface } from "../reducers/MainQuestionAnswerReducer";
import MainQASkeletion from "../components/mainQAComponent/MainQASkeletion";
import AnswerComponent from "../components/AnswerComponent/AnswerComponent";
// const MainQAAnswer=lazy(()=>import("../components/mainQAComponent/MainQAAnswer"))

const MainQA: FC<RouteComponentProps<any>> = ({ match }) => {
  const dispatch = useDispatch();
  const { token, user_id } = useTokenAndId();

  const [data, setData] = useState<any>({
    answer_id: "",
    question_id: "",
    title: "...",
    question: "....",
    user_id: "",
    username: "....",
    image: "",
    upvote: undefined,
  });

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as UserInfoInterface;

  const { loading: questionLoading, question } = useSelector<RootStateType>(
    (state) => state.mainQA
  ) as MainQuestionAnswerInterface;

  const { loading, answers } = useSelector<RootStateType>(
    (state) => state.answers
  ) as answersInterface;

  useEffect(() => {
    document.title = "Learn with us | Main QA";
  }, []);

  useEffect(() => {
    dispatch(MainQuestionAnswerAction(token, match.params.id));
    dispatch(AnswersOnlyAction(token, match.params.id));
  }, [match, token]);

  return (
    <div className="MainQA">
      <div className="MainQA__Heading">
        Main Question Answer
        <AnswerComponent />
      </div>
      {questionLoading ? (
        <MainQASkeletion />
      ) : (
        <MainQAQuestion question={question} />
      )}

      <div className="MainQA__Answers">
        {answers && answers.map((ans) => <MainQAAnswer ans={ans} />)}
      </div>
    </div>
  );
};

export default MainQA;
