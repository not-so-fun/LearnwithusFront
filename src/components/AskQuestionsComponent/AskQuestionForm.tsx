import React,{FC,ChangeEvent,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AskQuestionAction } from "../../actions/AskQuestionAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../../stores";
import { askQuestionInterface } from "../../reducers/AskQuestionReducer";
import { Progress } from "../ReusableUIComponents/Spinner";
import Alert from "@mui/material/Alert";
import AskQuestionFormTitle from "./AskQuestionFormTitle";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";

interface formDataInterface {
  title: string;
  topic_id: string;
  sub_topic_id: string;
  question: string;
}
const AskQuesForm: FC = () => {
    const [topic, setTopic] = useState(false);
    const [subTopic, setSubTopic] = useState(false);
    const dispatch = useDispatch();

  const { loading, message, error } = useSelector<RootStateType>(
    (state) => state.ask_question
  ) as askQuestionInterface;

  const { token } = useTokenAndId();
  const [formData, setFormData] = useState<formDataInterface>({
    title: "",
    topic_id: "",
    sub_topic_id: "",
    question: "",
  });

  const { title, topic_id, sub_topic_id, question } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionAsk:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {

    dispatch(AskQuestionAction(token, topic_id, sub_topic_id, title, question));

  };
    return (
        <div className="AskQuestionForm">
            <div className="AskQuestionForm__Heading">
                <div className="AskQuestionForm__Heading__Title"> 
                    Ask a question
                </div>
                {message && (
                <Alert style={{ fontSize: 15 }} icon={false}>
                {message}
                </Alert>
                )}

                {error && 

                  <div style={{color:"red",fontSize:15}}>{error}</div>
        
                 }
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
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                >    
                </input>
                <div className="AskQuestionForm__TitleInput__InputBox">
                    <div className="AskQuestionForm__TitleInput__InputBox__Title">
                        <input 
                        type="text" 
                        placeholder='Topic' 
                        className="AskQuestionForm__TitleInput__InputBox__Title__Input" 
                        name="topic_id"
                        value={topic_id}
                        onChange={(e) => handleChange(e)}
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
                        className="AskQuestionForm__TitleInput__InputBox__Title__Input" 
                        name="sub_topic_id"
                        value={sub_topic_id}
                        onChange={(e) => handleChange(e)}/>
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
                        {subTopic && <AskQuestionFormTitle/>}
                    </div>
                   
                </div>
            </div>
            <div className='AskQuestionForm__Body'>
                <div className="AskQuestionForm__Body__Heading">Body</div>
                <textarea className="AskQuestionForm__Body__Input" placeholder='Body'
                name="question"
                value={question}
                onChange={(e) => handleChange(e)}
                ></textarea>
            </div>
            <div className='AskQuestionForm__Footer'>
            {loading ? (
          <button
            style={{ width: 140 }}
            onClick={handleQuestionAsk}
            className="AskQuestionForm__Footer__Button"
          >
            <Progress size={25} />
          </button>
        ) : (
          <button
            style={{ width: 140 }}
            onClick={handleQuestionAsk}
            className="AskQuestionForm__Footer__Button"
          >
            Post your Question
          </button>
        )}
            </div> 
        </div>
    )
}

export default AskQuesForm;
