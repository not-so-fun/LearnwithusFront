import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ModalState } from "./ProfileStats";
import CloseIcon from "@mui/icons-material/Close";
import { ExpertiseAction } from "../../actions/ExpertiseAction";
import { expertiseInterface } from "../../reducers/ExpertiseReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../stores";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import TopicDropDownListItem from "./ModalComponents/TopicDropDownListItem";
import { Progress } from "../ReusableUIComponents/Spinner";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
  heading: string;
};
type ClickProp = {
  onClick: () => void;
  heading?: string;
};

const Backdrop: React.FC<ClickProp> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

const ModalOverlay: React.FC<ClickProp> = ({ onClick, heading }) => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, expertises, error } = useSelector<RootStateType>(
    (state) => state.expertises
  ) as expertiseInterface;

  useEffect(() => {
    dispatch(ExpertiseAction(token));
  }, [token]);

  return (
    <div className="modal">
      <CloseIcon className="modal__close" onClick={onClick} />
      <div className="modal__header">
        <h2>{heading}</h2>
      </div>
      <div className="modal__selects">
        <div className="modal__selects__header">
          <p className="modal__selects__header__text">Topic</p>
          {loading && <Progress size={25} />}
        </div>

        <div className="modal__selects__dropdown">
          {expertises &&
            expertises.map(
              (exp: {
                topic_id: string;
                title: string;
                user_id: string | null;
              }) => (
                <div key={exp.topic_id}>
                  <TopicDropDownListItem
                    title={exp.title}
                    user_id={exp.user_id}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

const ExpertiseModal: React.FC<PropState> = ({ modalHandler, heading }) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={modalHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay onClick={modalHandler} heading={heading} />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default ExpertiseModal;
