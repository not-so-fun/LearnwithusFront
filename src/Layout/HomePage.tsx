import { FC } from "react";
import Notification from "../components/HomePageComponent/Notification";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
import ProfileNewsFeed from "../components/ProfileComponents/NewsFeed";

const Profile: FC = () => {
  return (
    <>
      <div className="HomePage">
        <div className="HomePage__Left">
          <SideBar />
        </div>

        <div className="HomePage__Right">
          <div className="HomePage__Right__TopBar">
            <Navbar />
          </div>
          <div className="HomePage__Right__MainBody">
            <div className="HomePage__Right__MainBody__NewsFeed">
              <ProfileNewsFeed />
            </div>
            <div className="HomePage__Right__MainBody__Notification">
              <div>
                <Notification />
              </div>
              <div className="HomePage__Right__MainBody__Notification__Below">
                <button>Having a doubt, ask a question?</button>
                <button>Saved Questions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
