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
      <div className="App">
         
          
         
          

         
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => {
              console.log(route);
              return route.private ? (
                <>
                     <div className="HomePage__Left">
                        <SideBar />
                    </div>
             
                    <div className="HomePage__Right">
                      <div className="HomePage__Right__TopBar">
                        <Navbar />
                      </div> 
                    <div className="HomePage__Right__MainBody"> 
                      <PrivateRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
                    </div>
                  </div>
                </>
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
        </div>
    </>
  );
}

export default App;
