import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStateInterface } from "./reducers/LoginReducer";
import { RootStateType } from "./stores";
import { LoginAction } from "./actions/LoginAction";
import Login from "./auth/Login";
import { Register_Action } from "./actions/RegisterAction";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      
     <Login/>

    </div>
  );
}

export default App;
