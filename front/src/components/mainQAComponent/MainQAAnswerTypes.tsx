import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../stores";
import { answersInterface } from "../../reducers/AnsweresOnlyReducer";
import axios from "../../axios";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { ANSWERS_LOAD_SUCCESS } from "../../constants/OnlyAnswersContants";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface mainAnswerQATypest {
  question_id: string;
}

const MainQAAnswerTypes: FC<mainAnswerQATypest> = ({ question_id }) => {
  const [age, setAge] = useState<string>("Hello");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const { answers } = useSelector<RootStateType>(
    (state) => state.answers
  ) as answersInterface;

  const dispatch = useDispatch();

  const { token } = useTokenAndId();

  const handleShowAnswersSort:
    | React.ChangeEventHandler<HTMLSelectElement>
    | undefined = (e) => {
    axios
      .get(`/answers/${e.target.value}/${question_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: ANSWERS_LOAD_SUCCESS, answers: response.data });
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

        <span className="MainQA__Types__Box__Custom_Dropdown">
          <select onChange={(e) => handleShowAnswersSort(e)}>
            <option value="by_oldest"> Oldest</option>
            <option value="by_recent"> Recent</option>
          </select>
        </span>
      </div>
    </>
  );
};

export default MainQAAnswerTypes;
