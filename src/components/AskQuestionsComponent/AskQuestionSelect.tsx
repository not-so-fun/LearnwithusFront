import React, { FC } from "react";

const AskQuestionSelect: FC = () => {
  return (
    <div className="AskQuestionForm__TitleInput__InputBox__Div">
      <select className="AskQuestionForm__TitleInput__InputBox__Div__Select">
        <option value="0" selected>
          Topic
        </option>
        <option value="physic">Physic</option>
        <option value="maths">Maths</option>
        <option value="microprocessor">Microprocessor</option>
        <option value="chemistry">Chemistry</option>
        <option value="nepali">Nepali</option>
      </select>

      <select className="AskQuestionForm__TitleInput__InputBox__Div__Select">
        <option value="0" selected>
          Sub-Topic
        </option>
        <option value="physic">Physic</option>
        <option value="maths">Maths</option>
        <option value="microprocessor">Microprocessor</option>
        <option value="chemistry">Chemistry</option>
        <option value="nepali">Nepali</option>
      </select>
    </div>
  );
};

export default AskQuestionSelect;
