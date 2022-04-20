import React from "react";
import QuestionFeed from "../components/HomePageComponent/QuestionFeed";

const ProfileTry = () => {
  const question = {
    question_id: "92cb816e-2b57-45cb-b8e7-e12d5035d00b",
    topic_id: "6f07cea6-10ba-47c3-8b23-eb8ddd3e570c",
    sub_topic_id: null,
    topic_title: "Chemistry",
    username: "karmaa",
    image:
      "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
    upvote: true,
    total_upvotes: "3",
    total_downvotes: "0",
    saved_question_id: "f6f927ad-046b-4b12-96cb-a6035ccbf71f",
    created_at: "2022-04-18T06:08:32.130Z",
    updated_at: "2022-04-18T06:08:32.130Z",
    title: "Hello",
    views: "0",
    question: "<p>Why this kolaveri kolaveri di</p>",
    user_id: "d9493369-cbd7-425d-ac3c-37e808c6fa2c",
  };
  return (
    <div className="Profiles">
      <div className="ProfileTry__Top">
        <h2 className="ProfileTry__Top__Heading">Profile</h2>
        <p className="ProfileTry__Top__Paragraph">Short description here</p>
      </div>
      <div className="ProfileTry">
        <div className="ProfileTry__Left">
          <div className="ProfileTry__Left__ProfileInformation">
            <div className="ProfileTry__Left__ProfileInformation__Profile">
              <div className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto"></div>
              <div className="ProfileTry__Left__ProfileInformation__Profile__ProfileData">
                <h2 className="ProfileTry__Left__ProfileInformation__Profile__ProfileData__Heading">
                  Pasang Sherpa
                </h2>
                <p className="ProfileTry__Left__ProfileInformation__Profile__ProfileData__Paragraph">
                  Kathmandu,Nepal
                </p>
              </div>
            </div>
            <div className="ProfileTry__Left__ProfileInformation__Question">
              <div className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked">
                <h1 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading">
                  56
                </h1>
                <h4 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading__Below">
                  Questions Asked
                </h4>
              </div>
              <div className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked">
                <h1 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading">
                  100
                </h1>
                <h4 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading__Below">
                  Questions Answered
                </h4>
              </div>
            </div>
            <div className="ProfileTry__Left__ProfileInformation__Approach">
              <button className="ProfileTry__Left__ProfileInformation__Approach__Button">
                <strong>Approach</strong>
              </button>
            </div>
            <div className="ProfileTry__Left__ProfileInformation__ProfileData">
              <div className="ProfileTry__Left__ProfileInformation__ProfileData__AboutMe">
                <h3>About me</h3>
                <p className="ProfileTry__Left__ProfileInformation__ProfileData__AboutMe__Bio">
                  Hi, I am pasang.
                </p>
              </div>
              <div className="ProfileTry__Left__ProfileInformation__ProfileData__Email">
                <h3>Email</h3>
                <p className="ProfileTry__Left__ProfileInformation__ProfileData__Email__Text">
                  pasangsherpaopinthechat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProfileTry__Right">
          {/* <div className='ProfileTry__Right__AskQuestion'>

            </div> */}
          {/* <div className='ProfileTry__Right__QuestionBox'> */}
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileTry;
