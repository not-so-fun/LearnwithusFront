import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import SideBar from "../components/HomePageComponent/SideBar";
import Navbar from "../components/Navbar";
// import isAuthenticated from './auth';

interface PrivateRouteProps extends RouteProps {
  component?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("userInfo") ? (
          <>
            <div className="HomePage__Left">
              <SideBar />
            </div>

            <div className="HomePage__Right">
              <div className="HomePage__Right__TopBar">
                <Navbar />
              </div>
              <div className="HomePage__Right__MainBody">
                <Component {...props} />
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
