import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatchType, RootStateType } from "../../stores";
import { answersInterface } from "../../reducers/AnsweresOnlyReducer";
import axios from "../../axios";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import {ANSWERS_LOAD_SUCCESS} from "../../constants/OnlyAnswersContants"

interface mainAnswerQATypest {
  question_id: string;
}

const MainQAAnswerTypes: FC<mainAnswerQATypest> = ({ question_id }) => {
  const { answers } = useSelector<RootStateType>(
    (state) => state.answers
  ) as answersInterface;

  const dispatch=useDispatch()

  const { token } = useTokenAndId();

  const handleShowAnswersByOldest:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    axios
      .get(`/answers/by_oldest/${question_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({type:ANSWERS_LOAD_SUCCESS,answers:response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowAnswersByRecent:
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined = () => {
  axios
    .get(`/answers/by_recent/${question_id}`, {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      dispatch({type:ANSWERS_LOAD_SUCCESS,answers:response.data})
    })
    .catch((error) => {
      console.log(error);
    });
};

  
  return (
    <>
      <div className="MainQA__Types__Box">
        <div className="MainQA__Types__Box__Left">
          <div className="MainQA__Types__Box__Left__Data">
            <h1>Answers</h1>
            <h1 className="MainQA__Types__Box__Left__Data__Number">
              {answers?.length}
            </h1>
          </div>
        </div>
        <div className="MainQA__Types__Box__Right">
          <button className="MainQA__Types__Box__Right__Button">Votes</button>
          <button
            onClick={handleShowAnswersByOldest}
            className="MainQA__Types__Box__Right__Button"
          >
            Oldest
          </button>
          <button   onClick={handleShowAnswersByRecent} className="MainQA__Types__Box__Right__Button">Recent</button>
        </div>
      </div>
    </>
  );
};

export default MainQAAnswerTypes;
