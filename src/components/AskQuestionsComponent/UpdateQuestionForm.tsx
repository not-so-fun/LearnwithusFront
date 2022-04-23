import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePostQuestionAction } from "../../actions/UpdateQuestionAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../../stores";
import { askQuestionInterface } from "../../reducers/AskQuestionReducer";
import {UpdateQuestionInterface} from "../../reducers/UpdateQuestionReducer";
import Alert from "@mui/material/Alert";
import AskQuestionSelect from "./AskQuestionFormComponents/AskQuestionSelect";
import { Progress } from "../ReusableUIComponents/Spinner";
import TextEditor from "./AskQuestionFormComponents/TextEditor";
import ModalImageUpload from "../ReusableUIComponents/ModalImageUpload";


export interface formDataInterface {
  title: string;
  topic_id: string;
  sub_topic_id: string;
  question: string;
  showImageModal?:boolean;
  imageUploadPercent:number
}
const UpdateQuestionForm: FC<{question_id: string}> =({question_id}) => {
  const dispatch = useDispatch();
  const {loading,error,questions, message} = useSelector<RootStateType>(
    (state) => state.updateQuestion
  ) as UpdateQuestionInterface;

  const { token } = useTokenAndId();
  const [formData, setFormData] = useState<formDataInterface>({
    title:"",
    topic_id: "",
    sub_topic_id: "",
    question: "",
    showImageModal:false,
    imageUploadPercent:0
  });
  useEffect(()=>{
      if(questions){
        setFormData({
            ...formData,
            title:questions.title,
            topic_id:questions.topic_id,
            question:questions.question,
        })
      }
  },[questions])

  

  const {title, topic_id, sub_topic_id, question,showImageModal,imageUploadPercent } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionUpdate:
    | React.FormEventHandler<HTMLFormElement>
    | undefined = (e) => {
    e.preventDefault();
     dispatch(
      UpdatePostQuestionAction(
        question_id,
        token,
        topic_id,
        sub_topic_id,
        title,
        question
      )
    );
    
  };

  return (
    <form onSubmit={(e) => handleQuestionUpdate(e)} className="AskQuestionForm">
      <div className="AskQuestionForm__Heading">
        <div className="AskQuestionForm__Heading__Title">Update a question</div>
        {showImageModal  && <ModalImageUpload />}
        {message && (
          <>
            <Alert style={{ fontSize: 15 }} icon={false}>
              {message}
            </Alert>
          </>
        )}

        {error && <div style={{ color: "red", fontSize: 15 }}>{error}</div>}
      </div>
      <div className="AskQuestionForm__Title">
        <div className="AskQuestionForm__Title__Heading">Title</div>
        <p className="AskQuestionForm__Title__HelperText">
          Be specific to the question
        </p>
      </div>
      <div className="AskQuestionForm__TitleInput">
        <input
          type="text"
          className="AskQuestionForm__TitleInput__Title"
          placeholder="Put the title that enlightens"
          name="title"
          value={title}
          required
          onChange={(e) => handleChange(e)}
        ></input>

        <div className="AskQuestionForm__TitleInput__InputBox">
          <AskQuestionSelect setFormData={setFormData} formData={formData} />
        </div>
      </div>

      <div className="AskQuestionForm__Body">
        <div className="AskQuestionForm__Body__Heading">Body</div>
        <TextEditor formData={formData} setFormData={setFormData} />
      </div>

      <div className="AskQuestionForm__Footer">
        {loading ? (
          <button
            style={{ width: 140 }}
            className="AskQuestionForm__Footer__Button"
          >
            <Progress size={25} />
          </button>
        ) : (
          <button
            style={{ width: 140 }}
            className="AskQuestionForm__Footer__Button"
          >
            Update Question
          </button>
        )}
      </div>
    </form>
  );
};

export default UpdateQuestionForm;
