import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../stores";
import { AnswerTheQuestionAction } from "../../actions/AnswerTheQuestionAction";
import { answerTheQuestionInterface } from "../../reducers/AnswerTheQuestionReducer";
import { Progress } from "../ReusableUIComponents/Spinner";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import AnswerTextEditor from "./AnswerTextEditor";
import ModalImageUpload from "../ReusableUIComponents/ModalImageUpload";

interface answerComponentInterface {
  question_id: string;
}

const AnswerComponent: FC<answerComponentInterface> = ({ question_id }) => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();
  const { loading, answer, error } = useSelector<RootStateType>(
    (state) => state.answer_question
  ) as answerTheQuestionInterface;

  const [answerType, setAnswerType] = useState<string>("");
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const handleAnswerSubmit:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    dispatch(AnswerTheQuestionAction(token, question_id, answerType));
    setAnswerType("");
  };
  return (
    <>
      <div className="MainQA__AnswerInput__Box">
        <div className="MainQA__AnswerInput__Box__Heading">
          <h1>Your Answer</h1>
          {showImageModal && <ModalImageUpload />}
        </div>

        <AnswerTextEditor
          answerType={answerType}
          setAnswerType={setAnswerType}
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
        />

        <div className="MainQA__AnswerInput__Box__ButtonBox">
          {loading ? (
            <button
              disabled
              className="MainQA__AnswerInput__Box__ButtonBox__Button"
            >
              <Progress size={25} />
            </button>
          ) : (
            <button
              onClick={handleAnswerSubmit}
              className="MainQA__AnswerInput__Box__ButtonBox__Button"
            >
              Post your answer
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AnswerComponent;
