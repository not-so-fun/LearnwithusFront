import React, { useEffect } from "react";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";

import AskQuestionForm from "../components/AskQuestionsComponent/AskQuestionForm";

const AskQuestions = () => {
  useEffect(() => {
    document.title = "Learn with us | Ask question";
  }, []);
  return (
    // <>
    //   <div className="AskQuestion__Top">
    //     <Navbar />
    //   </div>
    //   <div className="AskQuestion__Main">

    //     <div className="AskQuestion__Main__Side"></div>
    //   </div>
    // </>
    <div className="AskQuestion">
      <div className="AskQuestion__Left">
        <div className="HomePage__Left">
          <SideBar />
        </div>
      </div>
      <div className="AskQuestion__Right">
        <div className="AskQuestion__Right__Top">
          <Navbar />
        </div>
        <div className="AskQuestion__Right__Bottom">
          <div className="AskQuestion__Right__Bottom__Left">
            <div className="AskQuestion__Right__Bottom__Left__Main__Form">
              <AskQuestionForm />
            </div>
          </div>
          <div className="AskQuestion__Right__Bottom__Right">Helps</div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
