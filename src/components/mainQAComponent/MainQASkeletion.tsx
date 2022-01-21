import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import  Skeleton  from '@mui/material/Skeleton';

const MainQASkeletion = () => {
  return <>
   <div className="MainQA__Question">
          <div className="MainQA__Question__Top">
            <div className="MainQA__Question__Top__ProfileData">
              <div className="MainQA__Question__Top__ProfileData__ProfilePhoto">
                <Skeleton variant='circular' width={80} height={80}  />
              </div>
              <div className="MainQA__Question__Top__ProfileData__ProfileName">
                {/* {question.username} */}
              </div>
            </div>
            <div className="MainQA__Question__Top__QuestionData">
              <div className="MainQA__Question__Top__QuestionData__Views">
                <div>Answered: Today</div>
                <div>Total Views: 50 views</div>
              </div>
              <div className="MainQA__Question__Top__QuestionData__Delete">
                <BsThreeDots className="MainQA__Question__Top__QuestionData__Delete__Icon" />
              </div>
            </div>
          </div>
          <div className="MainQA__Question__MainQuestionData">
            <div className="MainQA__Question__MainQuestionData__QuestionLikes">
      
            </div>
            <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody">
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Title">
                {/* {question.title} */}
              </div>
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Body">
                {/* {question.question} */}
              </div>
              <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Tag">
                <div className="MainQA__Question__MainQuestionData__QuestionTitleAndBody__Tag__TagName">
                  {/* {question.topic_title} */}
                </div>
              </div>
            </div>
          </div>
        </div>
  </>;
};

export default MainQASkeletion;
