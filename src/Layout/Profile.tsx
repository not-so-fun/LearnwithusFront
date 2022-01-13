import { FC, useEffect } from "react";
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
import ProfileNewsFeed from "../components/ProfileComponents/ProfileNewsFeed";

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
  const { token } = useTokenAndId();

  const { userInfo } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as any;

  useEffect(() => {
    if (userInfo) {
      dispatch(ProfileAction(match.params.id, userInfo.token));
    } else {
      dispatch(ProfileAction(match.params.id, token));
    }
  }, [match, token, userInfo]);

  const { loading, profile_data, error } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  return (
    <>
      <div className="Profile">
        <div className="Profile__Box">
          {loading ? (
            <h2 style={{ color: "black" }}>
              <Progress size={50} />
            </h2>
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
