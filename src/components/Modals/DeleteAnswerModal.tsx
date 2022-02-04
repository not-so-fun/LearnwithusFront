import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

import { Progress } from "../ReusableUIComponents/Spinner";
import Button from "@mui/material/Button";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
};
type ClickProp = {
  onClick: () => void;
};

const Backdrop: React.FC<ClickProp> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

const ModalOverlay: React.FC<ClickProp> = ({ onClick }) => {
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
        <button className="deleteModal__Button__Btn margin-right">
          Confirm
        </button>
        <button className="deleteModal__Button__BtnCancel" onClick={onClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const DeleteAnswerModal: React.FC<PropState> = ({ modalHandler }) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={modalHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay onClick={modalHandler} />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default DeleteAnswerModal;
