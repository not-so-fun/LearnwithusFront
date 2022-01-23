import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps,Link } from "react-router-dom";

import { questionFeedListInterface } from "../../reducers/QuestionFeedReducers";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";

import axios from "../../axios";

import { AiFillCaretDown,AiFillCaretUp,AiOutlineEye, AiOutlineDelete } from "react-icons/ai";

import { MdMessage,MdReportProblem } from "react-icons/md";

import { BsPencil,BsShare, BsFacebook,BsTwitter } from "react-icons/bs";

interface MainQAQuestionInterface {
  question: questionFeedListInterface | null;
}

interface lastStateInterface {
  upvote: boolean | null;
}

const MainQAQuestion: FC<MainQAQuestionInterface> = ({ question }) => {
  const [upvote, setUpvote] = useState<boolean | null>(null);
  const [lastState, setLastState] = useState<lastStateInterface>({
    upvote: null,
  });
  const { token } = useTokenAndId();

  useEffect(() => {
    setUpvote(question?.upvote!);
    setLastState({ upvote: question?.upvote! });
  }, [question]);

  const upVote = (upvote: boolean) => {
    axios
      .post(
        `/question-upvote`,
        {
          upvote,
          question_id: question?.question_id,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUpvote(lastState.upvote);
      });
  };

  const handleChangeUpvoteUp:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null) {
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(true);
    } else {
      if (upvote === true) {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(null);
      } else {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(true);
      }
    }
    upVote(true);
  };

  const handleChangeUpvoteDown:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    if (upvote === null) {
      setLastState({ ...lastState, upvote: upvote });
      setUpvote(false);
    } else {
      if (upvote === false) {
        setLastState({ ...lastState, upvote: upvote });

        setUpvote(null);
      } else {
        setLastState({ ...lastState, upvote: upvote });
        setUpvote(false);
      }
    }
    upVote(false);
  };

  return (
    <>
      {question && (
        <div className="QuestionFeed">
        <div className="QuestionFeed__Box">
              <div className="QuestionFeed__Box__Top">
                  <Link to={`/profile/${question.user_id}`}className="QuestionFeed__Box__Top__ProfileImage">
                      <img src={question.image} className="QuestionFeed__Box__Top__ProfileImage__Image"/>
  
                  </Link>
                  <div className="QuestionFeed__Box__Top__AboutQuestion">
                      <div className="QuestionFeed__Box__Top__AboutQuestion__Top">
                          <div className="QuestionFeed__Box__Top__AboutQuestion__Top__QuestionData">
                              <div className="QuestionFeed__Box__Top__AboutQuestion__Top__QuestionData__Time">
                                  Asked: March 28 2018
                              </div>
                              <div className="QuestionFeed__Box__Top__AboutQuestion__Top__QuestionData__Title">
                                  {question.topic_title}
                               </div>
                          </div>
                        
                  
                      </div>
                      <div className="QuestionFeed__Box__Top__AboutQuestion__Title">
                          <h2>{question.title} </h2>
                      </div>
                  </div>
              </div>
              <div className="QuestionFeed__Box__Main">
                  <div className="QuestionFeed__Box__Main__Upvotes">
                      {upvote == null ? (
                          <>
                      <div className="QuestionFeed__Box__Main__Upvotes__Likes">
                          <AiFillCaretUp 
                          onClick={handleChangeUpvoteUp}
                          
                          className="QuestionFeed__Box__Main__Upvotes__Likes__Logo"/>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Box">
                      <h1>22</h1>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Dislikes">
                      
                      <AiFillCaretDown
                      onClick={handleChangeUpvoteDown}
                       className="QuestionFeed__Box__Main__Upvotes__Dislikes__Logo"/>
                      </div>
                      </>
                      ) :(<>
                      {upvote === true ? (
                      <>
                      <div className="QuestionFeed__Box__Main__Upvotes__Likes">
                          <AiFillCaretUp 
                          onClick={handleChangeUpvoteUp}
                          style={{ color: "blue" }}
                          className="QuestionFeed__Box__Main__Upvotes__Likes__Logo"/>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Box">
                      <h1>22</h1>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Dislikes">
                      
                      <AiFillCaretDown
                      onClick={handleChangeUpvoteDown}
                       className="QuestionFeed__Box__Main__Upvotes__Dislikes__Logo"/>
                      </div></>
                      ): (<>
                      <div className="QuestionFeed__Box__Main__Upvotes__Likes">
                          <AiFillCaretUp 
                          onClick={handleChangeUpvoteUp}
                          
                          className="QuestionFeed__Box__Main__Upvotes__Likes__Logo"/>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Box">
                      <h1>22</h1>
  
                      </div>
                      <div className="QuestionFeed__Box__Main__Upvotes__Dislikes">
                      
                      <AiFillCaretDown
                      style={{ color: "red" }}
                      onClick={handleChangeUpvoteDown}
                       className="QuestionFeed__Box__Main__Upvotes__Dislikes__Logo"/>
                      </div>
  
                      </>)}</>)}
                      
  
                  </div>
                  
                  <div className="QuestionFeed__Box__Main__AboutQuestion">
                      <div className="QuestionFeed__Box__Main__AboutQuestion__Question">
                         <p> {question.question}
                             When you create a regular .NET 5 or 6 API project, you get some basic classes such as Program.cs and Startup.cs. I want to replicate that in a class project, because I want to be able to configure my services for dependency injection, but I don't want any controllers or HTTP in my project. As an example, let's assume I want to create a .NET 6 project using minimal API/hosting, and I want to check for file changes in a directory:
                         </p>
                      </div>
                      <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics">
                          <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left">
                              <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers">
                                  <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo">
                                      <MdMessage className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Logo__Logo"/>
                              
                         
  
                                  </div>
                                  <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Answers__Text">
                                      14 Answers
                                  </p>
                              
                              </div>
                              <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views">
                                  <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo">
                                  <AiOutlineEye className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Logo__Logo"/>
                                  </div>
                                  <p className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Left__Views__Text">
                                    412 views
                                  </p>
                              
                         
  
                              </div>
                              
                         
  
                         </div>
                         <div className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right">
                             <button className="QuestionFeed__Box__Main__AboutQuestion__QuestionStatistics__Right__Button" >
                                 Answer
                             </button>
                         </div>
                         
  
                      </div>
                 
                  </div>
              </div>
  
        </div>
        <div className="QuestionFeed__Bottom">
          <div className="QuestionFeed__Bottom__Left">
            <div className="QuestionFeed__Bottom__Left__Content">
              <div className="QuestionFeed__Bottom__Left__Content__Logo">
                <BsPencil className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
              </div>
              <p className="QuestionFeed__Bottom__Left__Content__Text">
                  Edit
              </p>


            </div>
            <div className="QuestionFeed__Bottom__Left__Content">
              <div className="QuestionFeed__Bottom__Left__Content__Logo">
              <AiOutlineDelete className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
              </div>
              <p className="QuestionFeed__Bottom__Left__Content__Text">
                    Delete
              </p>
            </div>
            <div className="QuestionFeed__Bottom__Left__Content">
              <div className="QuestionFeed__Bottom__Left__Content__Logo">
              <MdReportProblem className="QuestionFeed__Bottom__Left__Content__Logo__Logo" />
              </div>
              <p className="QuestionFeed__Bottom__Left__Content__Text">
                      Report
              </p>
            </div>

          </div>
          <div className="QuestionFeed__Bottom__Right">
            
              <div className="QuestionFeed__Bottom__Right__Content">
                    <div className="QuestionFeed__Bottom__Right__Content__Logo">
                    <BsShare className="QuestionFeed__Bottom__Right__Content__Logo"/>
                    
            
                    </div>
                    <p className="QuestionFeed__Bottom__Right__Content__Text">
                    Share
            
                    </p>
            
              </div>
              <div className="QuestionFeed__Bottom__Right__Content">
              <BsFacebook className="QuestionFeed__Bottom__Right__Content__Logos"/>
              </div>
              <div className="QuestionFeed__Bottom__Right__Content">
              <BsTwitter className="QuestionFeed__Bottom__Right__Content__Logos"/>
              </div>
            
          </div>


        </div>
  
  
  
    </div>
      )}
    </>
  );
};

export default MainQAQuestion;
