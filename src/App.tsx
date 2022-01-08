import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginStateInterface } from './reducers/LoginReducer';
import { RootStateType } from './stores';
import { LoginAction } from './actions/LoginAction';
import './App.css';

function App() {
  const dispatch=useDispatch()

  const {loading,error}=useSelector<RootStateType>(state=>state.userInfo) as loginStateInterface

  const handleLogin:React.MouseEventHandler<HTMLButtonElement> | undefined=()=>{
    dispatch(LoginAction("yugalkhati570@gmail.com","124"))
  }

  return (
    <div className="App">
      {loading && <h1>Loading</h1>}
     <button onClick={handleLogin}>Submit</button>
    </div>
  );
}

export default App;
