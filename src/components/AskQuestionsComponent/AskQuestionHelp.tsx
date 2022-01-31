import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AskQuestionHelp = () => {
  const [showMoreOne, setShowMoreOne] = useState<boolean>(false);
  const [showMoreTwo, setShowMoreTwo] = useState<boolean>(false);
  const [showMoreThree, setShowMoreThree] = useState<boolean>(false);

  return (
    <div className="AskQuestion__Right__Bottom__Right__Help">
      <div className="AskQuestion__Right__Bottom__Right__Help__Top">
        <div className="AskQuestion__Right__Bottom__Right__Help__Top__Header">
          Step 1: Draft your question
        </div>
        <div className="AskQuestion__Right__Bottom__Right__Help__Top__Content">
          The community is here to help you with specific coding, algorithm, or
          language problems.
        </div>
        <p className="AskQuestion__Right__Bottom__Right__Help__Top__Para">
          Avoid asking opinion-based questions.
        </p>

        <div
          className="AskQuestion__Right__Bottom__Right__Help__Top__List"
          onClick={() => {
            setShowMoreOne((prev) => !prev);
            setShowMoreTwo(false);
            setShowMoreThree(false);
          }}
        >
          <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex">
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left">
              <span className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left__span">
                1.
              </span>
              Summarize the problem
            </div>
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Right">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {showMoreOne && (
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer">
              <ul className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer__Content">
                <li>Include details about your goal</li>
                <li>Describe expected and actual results</li>
                <li>Include any error messages</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="AskQuestion__Right__Bottom__Right__Help__Top__List"
          onClick={() => {
            setShowMoreOne(false);
            setShowMoreTwo((prev) => !prev);
            setShowMoreThree(false);
          }}
        >
          <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex">
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left">
              <span className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left__span">
                2.
              </span>
              Describe what you've tried{" "}
            </div>
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Right">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {showMoreTwo && (
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer">
              <p className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer__Content">
                Show what you've tried and tell us what you found (on this site
                or elsewhere) and why it didn't meet your needs. You can get
                better answers when you provide research.
              </p>
            </div>
          )}
        </div>

        <div
          className="AskQuestion__Right__Bottom__Right__Help__Top__List"
          onClick={() => {
            setShowMoreOne(false);
            setShowMoreTwo(false);
            setShowMoreThree((prev) => !prev);
          }}
        >
          <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex">
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left">
              <span className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Left__span">
                3.
              </span>
              Show some code{" "}
            </div>
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Flex__Right">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {showMoreThree && (
            <div className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer">
              <p className="AskQuestion__Right__Bottom__Right__Help__Top__List__Answer__Content">
                When appropriate, share the minimum amount of code others need
                to reproduce your problem (also called a minimum, reproducible
                example)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskQuestionHelp;
