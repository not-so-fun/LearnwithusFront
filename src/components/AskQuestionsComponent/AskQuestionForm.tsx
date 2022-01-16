import React,{FC,useState} from 'react';
import AskQuestionFormTitle from "./AskQuestionFormTitle";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";

const AskQuesForm: FC = () => {
    const [topic, setTopic] = useState(false);
    const [subTopic, setSubTopic] = useState(false);
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
                    <div className="AskQuestionForm__TitleInput__InputBox__Title">
                        <input 
                        type="text" 
                        placeholder='Topic' 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Input" 
                        />
                        <button 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos"
                        name="topic"
                        onClick={()=>{setTopic(!topic)}}
                        >
                        {topic ?   <AiOutlineCaretUp 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos__Logo"/>
                        :
                        <AiOutlineCaretDown 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos__Logo"/>
                        }
                      
                        </button>
                        {topic && <AskQuestionFormTitle/>}
                    </div>
                    <div className="AskQuestionForm__TitleInput__InputBox__Title">
                        <input 
                        type="text" 
                        placeholder='SubTopic' 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Input" />
                        <button 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos"
                        name="subTopic"
                        onClick={()=>{setSubTopic(!subTopic)}}
                        >

                        {subTopic ?   
                        <AiOutlineCaretUp 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos__Logo"/>
                        :
                        <AiOutlineCaretDown 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Logos__Logo"/>
                        }
                        </button>
                    </div>
                   
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
