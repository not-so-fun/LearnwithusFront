import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import "./css/style.css";

import PrivateRoute from "./utilities/PrivateRoute";
import SideBar from "./components/HomePageComponent/SideBar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
     <BrowserRouter>
          <Switch>

            {routes.map((route, index) => {

              return route.private ? (
                
                      <PrivateRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
                     
                   
              ) : (
               
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
               
               
              );
            })}
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
