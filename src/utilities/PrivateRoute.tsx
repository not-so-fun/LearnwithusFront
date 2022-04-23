import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import SideBar from "../FixedComponents/SideBar";


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
    <div className="App">
      {/* <div className="HomePage__Right__TopBar"> */}
      <div className="App__Top__Bar">
        <Navbar />
      </div>

      {/* <div className="HomePage__Right"> */}
      <div className="App__Bottom">
        {/* <div className="HomePage__Left"> */}
        <div className="App__Bottom__Left">
          <SideBar />
        </div>

        {/* <div className="HomePage__Right__MainBody"> */}
        <div className="App__Bottom__MainBody">
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
    </div>
  );
};

export default PrivateRoute;
