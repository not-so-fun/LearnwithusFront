import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, RootDispatchType} from "./store";
import {NumberState, NumberAction} from "./types/NumberTypesAndInterfaces";
function App() {
  const dispatch: RootDispatchType = useDispatch() ;
  const state = useSelector<RootState>((state) => state.number) as NumberState;
 
  return (
    <div className="App">
      <div className="App_Number">
        {state.number}
      </div>
      <button onClick={ ()=>{dispatch({type:"ADD_NUMBER"})}}> Increase</button>
      
    </div>
  );
}

export default App;
