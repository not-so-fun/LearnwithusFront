import * as React from "react";

const AnswerComponent = () => {
  return (
    <div className="MainQA__AnswerInput__Box">
       <div className="MainQA__AnswerInput__Box__Heading">
        <h1>Your Answer</h1>
       </div>
       <div className="MainQA__AnswerInput__Box__InputBox">
       <textarea className="MainQA__AnswerInput__Box__InputBox__Input" placeholder="Your Answer"/>
      </div>
      <div className="MainQA__AnswerInput__Box__ButtonBox">
        <button className="MainQA__AnswerInput__Box__ButtonBox__Button">
          Post your answer
        </button>
      </div>
     
      
    
    </div>
  );
};

export default AnswerComponent;
