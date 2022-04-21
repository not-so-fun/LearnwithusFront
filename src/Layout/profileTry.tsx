import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import QuestionFeed from "../components/HomePageComponent/QuestionFeed";
import { useDispatch, useSelector } from "react-redux";
import { profileDataInterface } from "../reducers/ProfileReducer";
import { ProfileAction } from "../actions/ProfileAction";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { RootStateType } from "../stores";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import axios from "../axios";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { UpdateImageAction } from "../actions/UpdateImageAction";
import { rateUserAction } from "../actions/ProfileAction";
import CircularProgress from "@mui/material/CircularProgress";
import { RESET_USER_INFO } from "../constants/ProfileConstants";
import { PriorityHigh } from "@mui/icons-material";
import { ApproachAction } from "../actions/ApproachAction";
import { useHistory } from "react-router-dom";
import CircularProgressWithLabel from "../components/ReusableUIComponents/CircularProgressWithLabel";
import {
  CHANGE_IMAGE,
  START_IMAGE_UPLOAD,
  EDIT_PROFILE_ON,
  EDIT_PROFILE_OFF,
} from "../constants/ProfileConstants";
import storage from "../Firebase";

const ProfileTry: FC<RouteComponentProps<any>> = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token, user_id } = useTokenAndId();
  const { approachStatus } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;
  const Approached = () => {
    dispatch(ApproachAction(token, profile_data.user_id));
  };

  const handleMessage = () => {
    axios
      .get(`/chat/${profile_data.user_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push(`/messages/${response.data.chat_room_id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "LearnWithUs | Profile";
  }, []);

  useEffect(() => {
    if (userInfo && userInfo?.token) {
      dispatch(ProfileAction(match.params.id, userInfo.token));
    } else {
      dispatch(ProfileAction(match.params.id, token));
    }

    return () => {
      dispatch({
        type: RESET_USER_INFO,
        reset_info: {
          email: "",
          first_name: "....",
          last_name: "....",
          image: "",
          status: null,
          user_id: "....",
          username: "....",
        },
      });
    };
  }, [match, token, userInfo]);

  const { loading, profile_data, imageUploading, error, profileForm } =
    useSelector<RootStateType>(
      (state) => state.profile_info_data
    ) as profileDataInterface;

  const [progress, setProgess] = useState<number>(0);

  const formHandler = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];

    uploadFiles(file);
  };

  const uploadFiles = (file: any) => {
    
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgess(prog);
      },
      (error) => console.log(error),
      () => {
        dispatch({ type: START_IMAGE_UPLOAD });
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const body = { ...profile_data, image: downloadURL };
          dispatch(UpdateImageAction(token, downloadURL));
          dispatch({ type: CHANGE_IMAGE, image: body });
        });
      }
    );
  };
  // const RateUserUI: FC = () => {
  //   const [rate, setRate] = useState<number>(0);
  //   const rateApi: React.FormEventHandler<HTMLButtonElement> = (event) => {
  //     dispatch(rateUserAction(rate, profile_data.user_id, token));
  //   }

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
              <div className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto">
                <img
                  className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Photo"
                  src={profile_data.image}
                />
                <p className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Paragraph">
                  No Photo
                </p>
                {profile_data.user_id === user_id && (
                  <div className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Icon">
                    {progress > 0 && progress < 100 && (
                      <CircularProgressWithLabel
                        className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Icon__CircularIcon"
                        value={progress}
                      />
                    )}
                    {imageUploading && (
                      <CircularProgress className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Icon__CircularIcon" />
                    )}
                    <input
                      type="file"
                      className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Icon__Input custom-file-input"
                      onChange={formHandler}
                    />
                    <PhotoCameraIcon
                      className="ProfileTry__Left__ProfileInformation__Profile__ProfilePhoto__Icon__Camera"
                      style={
                        progress > 0 && progress < 100
                          ? { display: "none" }
                          : {}
                      }
                    />
                  </div>
                )}
              </div>
              <div className="ProfileTry__Left__ProfileInformation__Profile__ProfileData">
                <h2 className="ProfileTry__Left__ProfileInformation__Profile__ProfileData__Heading">
                  {profile_data.first_name + " " + profile_data.last_name}
                </h2>
                <p className="ProfileTry__Left__ProfileInformation__Profile__ProfileData__Paragraph">
                  Kathmandu,Nepal
                </p>
              </div>
            </div>
            <div className="ProfileTry__Left__ProfileInformation__Question">
              <div className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked">
                <h1 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading"></h1>
                <h4 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading__Below">
                  Questions <br></br> Asked
                </h4>
              </div>
              <div className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked">
                <h1 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading">
                  100
                </h1>
                <h4 className="ProfileTry__Left__ProfileInformation__Question__QuestionAsked__Heading__Below">
                  Questions <br></br> Answered
                </h4>
              </div>
            </div>
            {user_id !== profile_data.user_id && (
              <div className="ProfileTry__Left__ProfileInformation__Approach">
                {approachStatus === null && (
                  <>
                    {!loading ? (
                      <button
                        style={{ color: "white" }}
                        className="ProfileTry__Left__ProfileInformation__Approach__Button"
                        onClick={Approached}
                      >
                        Approach
                      </button>
                    ) : (
                      <button
                        style={{ color: "white" }}
                        className="ProfileTry__Left__ProfileInformation__Approach__Button"
                      >
                        <CircularProgress style={{ color: "white" }} />
                      </button>
                    )}
                  </>
                )}
                {approachStatus === "pending" && (
                  <>
                    {!loading ? (
                      <button
                        style={{ color: "white" }}
                        className="ProfileTry__Left__ProfileInformation__Approach__Button"
                        onClick={Approached}
                      >
                        Pending
                      </button>
                    ) : (
                      <button
                        style={{ color: "white" }}
                        className="ProfileTry__Left__ProfileInformation__Approach__Button"
                      >
                        <CircularProgress style={{ color: "white" }} />
                      </button>
                    )}
                  </>
                )}
                {approachStatus === "accepted" && (
                  <button
                    onClick={handleMessage}
                    className="ProfileTry__Left__ProfileInformation__Approach__Button"
                  >
                    Message
                  </button>
                )}
              </div>
            )}
            <div className="ProfileTry__Left__ProfileInformation__ProfileData">
              <div className="ProfileTry__Left__ProfileInformation__ProfileData__AboutMe">
                <h3>About me</h3>
                <p className="ProfileTry__Left__ProfileInformation__ProfileData__AboutMe__Bio">
                  Hi, I am pasang.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProfileTry__Right">
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
          <QuestionFeed question={question} />
        </div>
      </div>
    </div>
  );
};

export default ProfileTry;
