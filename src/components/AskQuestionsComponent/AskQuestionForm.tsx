import React, { FC, ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AskQuestionAction } from "../../actions/AskQuestionAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../../stores";
import { askQuestionInterface } from "../../reducers/AskQuestionReducer";
import Alert from "@mui/material/Alert";
import AskQuestionSelect from "./AskQuestionSelect";
import { Progress } from "../ReusableUIComponents/Spinner";
import TextEditor from "./TextEditor";
import ModalImageUpload from "../ReusableUIComponents/ModalImageUpload";

export interface formDataInterface {
  title: string;
  topic_id: string;
  sub_topic_id: string;
  question: string;
  showImageModal?: boolean;
  imageUploadPercent: number;
}
const AskQuesForm: FC = () => {
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
    showImageModal: false,
    imageUploadPercent: 0,
  });

  const {
    title,
    topic_id,
    sub_topic_id,
    question,
    showImageModal,
    imageUploadPercent,
  } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionAsk:
    | React.FormEventHandler<HTMLFormElement>
    | undefined
    | undefined = (e) => {
    e.preventDefault();
    dispatch(AskQuestionAction(token, topic_id, title, question, setFormData));
  };

  return (
    <div className="AskQuestionForm">
      <div className="AskQuestionForm__Title">
        <h3>Ask Your Question.</h3>
      </div>

      <div className="AskQuestionForm__Main">
        <form onSubmit={handleQuestionAsk} action="">
          <div className="AskQuestionForm__Main__Form">
            <div className="AskQuestionForm__Main__Form__Item">
              <label
                htmlFor="title"
                className="AskQuestionForm__Main__Form__Item__Label"
              >
                Question Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
                className="AskQuestionForm__Main__Form__Item__Input"
                placeholder="Put a title that enlightens"
              />
              <span className="AskQuestionForm__Main__Form__Item__Span">
                Please write the appropriate title for the question so that it
                can be easily answered.{" "}
              </span>
            </div>
            <div className="AskQuestionForm__Main__Form__Item">
              <label
                htmlFor="title"
                className="AskQuestionForm__Main__Form__Item__Label"
              >
                Category
              </label>
              <AskQuestionSelect
                setFormData={setFormData}
                formData={formData}
              />
              <span className="AskQuestionForm__Main__Form__Item__Span">
                Please choose the category wisely.
              </span>
            </div>
            <div className="AskQuestionForm__Main__Form__Item">
              <label
                htmlFor="title"
                className="AskQuestionForm__Main__Form__Item__Label"
              >
                Body
              </label>
              <TextEditor formData={formData} setFormData={setFormData} />
              <span className="AskQuestionForm__Main__Form__Item__Span">
                Type the description thoroughly and in details.
              </span>
            </div>
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
                Post Your Question
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuesForm;
