import React, { FC, useEffect, useState, lazy, Suspense } from "react";
import { RouteComponentProps } from "react-router-dom";
import MainQAQuestion from "../components/mainQAComponent/MainQAQuestion";
import MainQAAnswers from "../components/mainQAComponent/MainQAAnswers";
import MainQAAnswerTypes from "../components/mainQAComponent/MainQAAnswerTypes";
import { useDispatch, useSelector } from "react-redux";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { MainQuestionAnswerAction } from "../actions/MainQuestionAnswerAction";
import { AnswersOnlyAction } from "../actions/AnswersOnlyAction";
import { RootStateType } from "../stores";
import { UserInfoInterface } from "../reducers/LoginReducer";
import { questionFeedListInterface } from "../reducers/QuestionFeedReducers";
import { answersInterface } from "../reducers/AnsweresOnlyReducer";
import { MainQuestionAnswerInterface } from "../reducers/MainQuestionAnswerReducer";
import AnswerComponent from "../components/mainQAComponent/AnswerComponent";

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

  const { loading: questionLoading, question,answers } = useSelector<RootStateType>(
    (state) => state.mainQA
  ) as MainQuestionAnswerInterface;

  // const { loading, answers } = useSelector<RootStateType>(
  //   (state) => state.answers
  // ) as answersInterface;

  useEffect(() => {
    document.title = "Learn with us | Main QA";
  }, []);

  useEffect(() => {
    dispatch(MainQuestionAnswerAction(token, match.params.id));
  }, [match, token]);

  // useEffect(() => {
  //   dispatch(AnswersOnlyAction(token, match.params.id));
  // }, [match, token]);
  let className = "";
  if (answers.length === 1) {
    className = "MainQA__OneAnswer";
  } else if (answers.length === 0) {
    className = "MainQA__NoAnwers";
  } else {
    className = "MainQA__Answers";
  }
  return (
    <>
      <div className="MainQA">
        <div className="MainQA__Heading">Main Question Answer</div>
        <div className="MainQA__Questions"></div>
        <MainQAQuestion question={question} />
        <div className="MainQA__Types">
          <MainQAAnswerTypes question_id={match.params.id} />
        </div>

        <div className={className}>
          {answers && answers.map((ans) => <MainQAAnswers ans={ans} />)}
        </div>
        <div className="MainQA__AnswerInput">
          <AnswerComponent question_id={match.params.id} />
        </div>
      </div>
    </>
  );
};

export default MainQA;
