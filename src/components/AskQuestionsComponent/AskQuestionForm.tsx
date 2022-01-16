import React from 'react'

const AskQuesForm = () => {
    return (
        <div className="AskQuestionForm">
            <div className="AskQuestionForm__Heading">
                <div className="AskQuestionForm__Heading__Title"> 
                    Ask a question
                </div>
            </div>
            <div className='AskQuestionForm__Title'>
                <div className="AskQuestionForm__Title__Heading">
                    Title
                </div>
                <p className="AskQuestionForm__Title__HelperText">
                    Be specific to the question
                </p>
            </div>
            <div className="AskQuestionForm__TitleInput">
                <input 
                type="text" 
                className="AskQuestionForm__TitleInput__Title" 
                placeholder='Put the title that enlightens'
                >    
                </input>
                <div className="AskQuestionForm__TitleInput__InputBox">
                  <input 
                  type="text" 
                  placeholder='Topic' 
                  className="AskQuestionForm__TitleInput__InputBox__Title" 
                  />
                  <input 
                  type="text" 
                  placeholder='SubTopic' 
                  className="AskQuestionForm__TitleInput__InputBox__Title" />
                  <input 
                  type="text" 
                  placeholder='SmallTopic' 
                  className="AskQuestionForm__TitleInput__InputBox__Title" />
                </div>
            </div>
            <div className='AskQuestionForm__Body'>
                <div className="AskQuestionForm__Body__Heading">Body</div>
                <textarea className="AskQuestionForm__Body__Input" placeholder='Body'></textarea>
            </div>
            <div className='AskQuestionForm__Footer'>
                <button className='AskQuestionForm__Footer__Button'>
                    Post your Question
                </button>
            </div> 
        </div>
    )
}

export default AskQuesForm;
