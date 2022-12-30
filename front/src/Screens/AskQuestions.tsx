import React, { useEffect } from "react";
import AskQuestionForm from "../components/AskQuestionsComponent/AskQuestionForm";
import AskQuestionHelp from "../components/AskQuestionsComponent/AskQuestionHelp";

const AskQuestions = () => {
  useEffect(() => {
    document.title = "Learn with us | Ask question";
  }, []);
  return (
    <div className="AskQuestion">
      <div className="AskQuestion__Right">
        <div className="AskQuestion__Right__Bottom">
          <div className="AskQuestion__Right__Bottom__Left">
            <div className="AskQuestion__Right__Bottom__Left__Main__Form">
              <AskQuestionForm />
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

export default AskQuestions;
