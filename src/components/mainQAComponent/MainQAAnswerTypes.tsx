import React from 'react';

const MainQAAnswerTypes = () => {
  return (
    <>
    <div className="MainQA__Types__Box">
      <div className="MainQA__Types__Box__Left">
      <div className="MainQA__Types__Box__Left__Data">
          <h1>Answers</h1>
          <h1 className="MainQA__Types__Box__Left__Data__Number">14</h1>
        
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

