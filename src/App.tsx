import React from 'react';
import logo from './logo.svg';

import {useSelector, useDispatch} from 'react-redux';
import {RootState, RootDispatchType} from "./store";
import {NumberState, NumberAction} from "./types/NumberTypesAndInterfaces";
import Login from "./auth/Login";
import "./css/style.css"
function App() {
  const dispatch: RootDispatchType = useDispatch() ;
  const state = useSelector<RootState>((state) => state.number) as NumberState;
 
  return (
    <>
      <Login/>
    </>
  );
}

export default App;
