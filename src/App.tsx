import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import Navbar from "./components/Navbar";
import "./css/style.css";

import PrivateRoute from "./utilities/PrivateRoute";
function App() {
  
  return (
    <>

    <div className="App">
      <BrowserRouter>
      
    <Navbar/>
        <Switch>
          {routes.map((route, index) => {
            // const {private} = route;
            
            return (<>
            {/* {route.showNav ?  <Navbar/> : <></>} */}
             
              {route.private ? 
              
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component ={route.component}
                // render={(props: RouteComponentProps<any>) => (
                //   <route.component
                //     name={route.name}
                //     {...props}
                //     {...route.props}
                //   />
                // )}
              />:
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
              />}
              </>
            );
            
          })
          }
        </Switch>
        
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
