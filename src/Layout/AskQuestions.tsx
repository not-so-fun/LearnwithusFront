import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AskQuestionForm from "../components/AskQuestionsComponent/AskQuestionForm";

const AskQuestions = () => {
  useEffect(() => {
    document.title = "Learn with us | Ask question";
  }, []);
  return (
    <>
      <div className="AskQuestion__Top">
        <Navbar />
      </div>
      <div className="AskQuestion__Main">
        <div className="AskQuestion__Main__Form">
          <AskQuestionForm />
        </div>
        <div className="AskQuestion__Main__Side"></div>
      </div>
    </>
  );
};

export default AskQuestions;
