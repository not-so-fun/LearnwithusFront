import React, { FC,useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import UpdateQuestionForm from "../components/AskQuestionsComponent/UpdateQuestionForm";
import AskQuestionHelp from "../components/AskQuestionsComponent/AskQuestionHelp";
import {UpdateQuestionAction} from "../actions/UpdateQuestionAction";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { useDispatch } from "react-redux";

const UpdateQuestions: FC<RouteComponentProps<any>> = ({match}) => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();
   
  useEffect(() => {
    document.title = "Learn with us | Update question";
    dispatch(UpdateQuestionAction(token, match.params.question_id));
  }, [match.params.id,token]);

  return (
    <div className="AskQuestion">
      <div className="AskQuestion__Right">
        <div className="AskQuestion__Right__Bottom">
          <div className="AskQuestion__Right__Bottom__Left">
            <div className="AskQuestion__Right__Bottom__Left__Main__Form">
              <UpdateQuestionForm question_id={match.params.question_id}/>
            </div>
          </div>
          <div className="AskQuestion__Right__Bottom__Right">
            <AskQuestionHelp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuestions;
