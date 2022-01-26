import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../stores';
import {answersInterface} from "../../reducers/AnsweresOnlyReducer"

const MainQAAnswerTypes = () => {
  const {answers}=useSelector<RootStateType>(state=>state.answers) as answersInterface
  return (
    <>
    <div className="MainQA__Types__Box">
      <div className="MainQA__Types__Box__Left">
      <div className="MainQA__Types__Box__Left__Data">
          <h1>Answers</h1>
          <h1 className="MainQA__Types__Box__Left__Data__Number">{answers?.length}</h1>
        
        </div> 
        
        </div> 
        <div className="MainQA__Types__Box__Right">
          <button className="MainQA__Types__Box__Right__Button">
            Votes
          </button> 
          <button className="MainQA__Types__Box__Right__Button">
            Oldest
          </button> 
          <button className="MainQA__Types__Box__Right__Button">
            Recent
          </button> 

        
        </div> 

    </div>
    </>
  );
};

export default MainQAAnswerTypes;

