import { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ProfileImageAndData from "../components/ProfileComponents/ProfileImageAndData";
import ProfileForm from "../components/ProfileComponents/ProfileForm";
import ProfileStats from "../components/ProfileComponents/ProfileStats";
import ProfileQAStatus from "../components/ProfileComponents/ProfileQAStatus";
import { useDispatch, useSelector } from "react-redux";
import { profileDataInterface } from "../reducers/ProfileReducer";
import { ProfileAction } from "../actions/ProfileAction";
import { RootStateType } from "../stores";
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { Progress } from "../components/ReusableUIComponents/Spinner";
import Navbar from "../components/Navbar";
import ProfileNewsFeed from "../components/ProfileComponents/NewsFeed";

// const answerStats = [
//   {
//     topic: "Electrostatics",
//     answers: 20,
//     ratting: "⭐️⭐️⭐️⭐️⭐️",
//   },
//   {
//     topic: "Mechanics",
//     answers: 20,
//     ratting: "⭐️⭐️⭐️⭐️⭐️",
//   },
// ];

const Profile: FC<RouteComponentProps<any>> = ({ match }) => {
  const dispatch = useDispatch();
  const { token, user_id } = useTokenAndId();

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  useEffect(() => {
    document.title = "LearnWithUs | Profile";
  }, []);

  useEffect(() => {
    if (userInfo && userInfo?.token) {
      dispatch(ProfileAction(match.params.id, userInfo.token));
    } else {
      dispatch(ProfileAction(user_id, token));
    }
  }, [match, token, userInfo, user_id]);

  const { loading, profile_data, error } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  return (
    <>
      <div className="Profile">
        <div className="Profile__Box">
          <div className="Profile__Box__Navbar">
            <Navbar />
          </div>

          {loading ? (
            <>
              <div className="Profile__Box__Top">
                <ProfileImageAndData profile_data={profile_data} />
                <ProfileForm profile_data={profile_data} />
                <ProfileStats />
              </div>
              <div className="Profile__Box__Main">
                <div className="Profile__Box__Main__Newsfeed">
                  <ProfileNewsFeed />
                  <ProfileNewsFeed />
                  <ProfileNewsFeed />
                  <ProfileNewsFeed />
                  <ProfileNewsFeed />
                </div>

                <div className="Profile__Box__Main__SideInformation">
                  <ProfileQAStatus />
                  <ProfileQAStatus />
                </div>
              </div>
            </>
          ) : (
            <>
              {error ? (
                <h1 style={{ color: "black" }}>{error}</h1>
              ) : (
                <>
                  <div className="Profile__Box__Top">
                    <ProfileImageAndData profile_data={profile_data} />
                    <ProfileForm profile_data={profile_data} />
                    <ProfileStats />
                  </div>
                  <div className="Profile__Box__Main">
                    <div className="Profile__Box__Main__Newsfeed">
                      <ProfileNewsFeed />
                      <ProfileNewsFeed />
                      <ProfileNewsFeed />
                      <ProfileNewsFeed />
                      <ProfileNewsFeed />
                    </div>
                    <div className="Profile__Box__Main__SideInformation">
                      <ProfileQAStatus />
                      <ProfileQAStatus />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
