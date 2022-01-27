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

export interface formDataInterface {
  title: string;
  topic_id: string;
  sub_topic_id: string;
  question: string;
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
  });

  const { title, topic_id, sub_topic_id, question } = formData;

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
    dispatch(
      AskQuestionAction(
        token,
        topic_id,
        sub_topic_id,
        title,
        question,
        setFormData
      )
    );
  };

  return (
    <form onSubmit={(e) => handleQuestionAsk(e)} className="AskQuestionForm">
      <div className="AskQuestionForm__Heading">
        <div className="AskQuestionForm__Heading__Title">Ask a question</div>

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
            Post Question
          </button>
        )}
      </div>
    </form>
  );
};

export default AskQuesForm;
