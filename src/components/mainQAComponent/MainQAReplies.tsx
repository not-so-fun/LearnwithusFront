import React from 'react';
import {AiOutlineCaretDown,AiOutlineCaretUp,
    AiOutlineShareAlt} from "react-icons/ai";
import { BsFillReplyAllFill } from "react-icons/bs";
import { MdReportProblem} from "react-icons/md";

const MainQAReplies = () => {
  return (<div className="MainQA__Replies__Reply">
  <div className="MainQA__Answer__Box">
      <div className="MainQA__Answer__Box__Top">
          <div className="MainQA__Answer__Box__Top__Left">
          <div className="MainQA__Answer__Box__Top__Left__ProfilePhoto">
              {/* <img src={} 
              className="MainQA__Answer__Box__Top__Left__ProfilePhoto__Image"
              /> */}
             

          </div>
          <div className='MainQA__Answer__Box__Top__Left__AnswerData'>
            <div className="MainQA__Answer__Box__Top__Left__AnswerData__UserName">
                <h2>Pasang Sherpa</h2>
            </div>
            <div className="MainQA__Answer__Box__Top__Left__AnswerData__AnswerData">
                <p>
                Added a reply on March 25, 2018 at 04:50 AM
                </p>
            </div>
         </div>
         </div>
         {/* <div className="MainQA__Answer__Box__Top__Right">
             <div className="MainQA__Answer__Box__Top__Right__AnswerQuality">
                 <p>Best Answer</p>
             </div>
            </div> */}
      </div>
      <div className="MainQA__Answer__Box__Main">
        <div className="MainQA__Answer__Box__Main__Likes">
              {/* Upvote started */}
           <div className="MainQA__Answer__Box__Main__Likes__Upvote">
              <AiOutlineCaretUp
           className="MainQA__Answer__Box__Main__Likes__Upvote__Logo" 
        //    style={(upvote===true)?{color: "blue"}:{}} 
        //    onClick={handleChangeUpvoteUp}
           /> 
           </div>
          
               
            
            <div className="MainQA__Answer__Box__Main__Likes__Total">1</div>
            <div className="MainQA__Answer__Box__Main__Likes__Downvote">
           
             
           <AiOutlineCaretDown
           className="MainQA__Answer__Box__Main__Likes__Downvote__Logo" 
        //    style={(upvote===false)?{color:"red"}:{}}  
        //    onClick={handleChangeUpvoteDown}
           />
            </div> 
            </div> 

        
          <div className='MainQA__Answer__Box__Main__AnswerText'>
            <div className='MainQA__Answer__Box__Main__AnswerText__Text'>
              <p>
                  
                  If it is difficult fo you to quit cold turkey then try adding 2 or 3 vegeterian or vegan meals per week to see how you feel. The most important thing is to read, read, read anything you can find on the subject to keep yourself informed and to find recipes so that you'll have a variety and won't get bored with the same old thing. I wish you Good Luck!
              </p>
              </div>
              <div className='MainQA__Answer__Box__Main__Bottom'>   
            <div className="MainQA__Answer__Box__Main__Bottom__Function">
            <div className="MainQA__Answer__Box__Main__Bottom__Function__Logo">
            <AiOutlineShareAlt className="MainQA__Answer__Box__Main__Bottom__Function__Logo__Logo"/>
            </div>
           <p className="MainQA__Answer__Box__Main__Bottom__Function__Text">Share</p>
            </div> 
            <div className="MainQA__Answer__Box__Main__Bottom__Function">
            <div className="MainQA__Answer__Box__Main__Bottom__Function__Logo">
            <MdReportProblem className="MainQA__Answer__Box__Main__Bottom__Function__Logo__Logo"/>
            </div>
           <p className="MainQA__Answer__Box__Main__Bottom__Function__Text">Report</p>
            </div> 
          </div>
      </div>
    </div>
          
  </div>

</div>);
};

export default MainQAReplies;
