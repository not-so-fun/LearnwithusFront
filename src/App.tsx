import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginStateInterface } from './reducers/LoginReducer';
import { RootStateType } from './stores';
import { LoginAction } from './actions/LoginAction';
import { Register_Action } from './actions/RegisterAction';
import './App.css';
import Login from "./auth/Login";
import "./css/style.css"
function App() {
  const dispatch=useDispatch()

  const {loading,error}=useSelector<RootStateType>(state=>state.userInfo) as loginStateInterface

  const handleLogin:React.MouseEventHandler<HTMLButtonElement> | undefined=()=>{
    dispatch(LoginAction("yugalkhati570@gmail.com","124"))
  }

  const handleRegister:React.MouseEventHandler<HTMLButtonElement> | undefined=()=>{
    dispatch(Register_Action("yugalkhati570@gmail.com","Yug","Yugal","Pariyar","1234"))
  }

  return (
    <div className="App">
      {loading && <h1>Loading</h1>}
     <button onClick={handleLogin}>Submit Login</button>
     <button onClick={handleRegister}>Submit Register</button>

    </div>
  );
}

export default App;
