import { FC, useEffect } from "react";

import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
import ProfileNewsFeed from "../components/ProfileComponents/NewsFeed";
import { Link} from "react-router-dom";

const HomePage: FC = () => {
  useEffect(() => {
    document.title ="Learn with us | Home"
  }, [])
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
              <ProfileNewsFeed />
              <ProfileNewsFeed />
              <ProfileNewsFeed />
              <ProfileNewsFeed />
              <ProfileNewsFeed />

            </div>
            <div className="HomePage__Right__MainBody__Notification">
              
              <div className="HomePage__Right__MainBody__Notification__Below">
                <Link to="/question/ask" className="HomePage__Right__MainBody__Notification__Below__Links">Having a doubt, ask a question?</Link>
                <button >Saved Questions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
