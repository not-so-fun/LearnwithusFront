import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const RightSideBar = () => {
  return (
    <div className="HomePage__Right__MainBody__Notification">
      <div className="HomePage__Right__MainBody__Notification__Below">
        <Link
          to="/question/ask"
          className="HomePage__Right__MainBody__Notification__Below__Links"
        >
          Having a doubt, ask a question?
        </Link>
      </div>
      <div className="HomePage__Right__MainBody__Notification__Two">
        <div className="HomePage__Right__MainBody__Notification__Two__Left">
          <div className="HomePage__Right__MainBody__Notification__Two__Left__Top">
            Questions
          </div>
          <div className="HomePage__Right__MainBody__Notification__Two__Left__Bottom">
            20+
          </div>
        </div>
        <div className="HomePage__Right__MainBody__Notification__Two__Right">
          <div className="HomePage__Right__MainBody__Notification__Two__Right__Top">
            Answers
          </div>
          <div className="HomePage__Right__MainBody__Notification__Two__Right__Bottom">
            10+
          </div>
        </div>
      </div>
      <div className="HomePage__Right__MainBody__Notification__Trend">
        <h3 className="HomePage__Right__MainBody__Notification__Trend__Header">
          Trendings
        </h3>
        <div className="HomePage__Right__MainBody__Notification__Trend__Item">
          <div className="HomePage__Right__MainBody__Notification__Trend__Item__Left">
            <AccountCircleIcon className="HomePage__Right__MainBody__Notification__Trend__Item__Left__Avatar" />
          </div>
          <div className="HomePage__Right__MainBody__Notification__Trend__Item__Right">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Why does the theory of evolution does'nt make any sense?
            </Link>
            <span className="HomePage__Right__MainBody__Notification__Trend__Item__Right__Span">
              <QuestionAnswerIcon className="HomePage__Right__MainBody__Notification__Trend__Item__Right__Span__Icon" />{" "}
              65 answers
            </span>
          </div>
        </div>
        <div className="HomePage__Right__MainBody__Notification__Trend__Item">
          <div className="HomePage__Right__MainBody__Notification__Trend__Item__Left">
            <AccountCircleIcon className="HomePage__Right__MainBody__Notification__Trend__Item__Left__Avatar" />
          </div>
          <div className="HomePage__Right__MainBody__Notification__Trend__Item__Right">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Why does the theory of evolution does'nt make any sense?
            </Link>
            <span className="HomePage__Right__MainBody__Notification__Trend__Item__Right__Span">
              <QuestionAnswerIcon className="HomePage__Right__MainBody__Notification__Trend__Item__Right__Span__Icon" />{" "}
              65 answers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
