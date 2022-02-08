import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import {AnswersDeleteAction} from "../../actions/AnswersOnlyAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch } from "react-redux";
import { Progress } from "../ReusableUIComponents/Spinner";
import Button from "@mui/material/Button";
import  {
   ANSWERS_DELETE_START,
ANSWERS_DELETE_SUCCESS
} from "../../constants/OnlyAnswersContants";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
  answer_id:string;
};
type ClickProp = {
  onClick: () => void;
};
type ClickProp1 = {
  onClick: () => void;
  answer_id:string;
};


const Backdrop: React.FC<ClickProp> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};
 
const ModalOverlay: React.FC<ClickProp1> = ({ answer_id , onClick }: ClickProp1) => {
  const {token} = useTokenAndId();
  const dispatch= useDispatch()
  const deleteAction =()=>{
    dispatch({ type: ANSWERS_DELETE_START });
    dispatch({type:ANSWERS_DELETE_SUCCESS, answer_id: answer_id});
    dispatch(AnswersDeleteAction(token, answer_id));
    onClick();
  }
  return (
    <div className="deleteModal">
      <div className="deleteModal__Top">
        <CloseIcon className="deleteModal__close" onClick={onClick} />
      </div>
      <div className="deleteModal__Question">
        <p className="deleteModal__Question__para">
          {" "}
          Are you sure you want to delete this answer?
        </p>
      </div>
      <div className="deleteModal__Button">
        <button className="deleteModal__Button__Btn margin-right" onClick={deleteAction}>
          Confirm
        </button>
        <button className="deleteModal__Button__BtnCancel" onClick={onClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const DeleteAnswerModal: React.FC<PropState> = ({answer_id, modalHandler }) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={modalHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay answer_id={answer_id} onClick={modalHandler} />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default DeleteAnswerModal;
