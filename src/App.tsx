import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import './App.css';
import routes from './config/routes';
import "./css/style.css"


function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
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
  );
}

export default App;
