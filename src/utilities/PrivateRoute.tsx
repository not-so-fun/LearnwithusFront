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
    <>
      <div className="HomePage__Left">
        <SideBar />
      </div>

      <div className="HomePage__Right">
        <div className="HomePage__Right__TopBar">
          <Navbar />
        </div>
        <div className="HomePage__Right__MainBody">
          <Route
            {...rest}
            render={(props) =>
              localStorage.getItem("userInfo") ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              )
            }
          />
        </div>
        </div>
      </>
  );
};

export default PrivateRoute;
