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
import ExpertiseDropDownListItem from "./ModalComponents/ExpertiseDropDownListItem";
import { expertiseEditReducerInterface } from "../../reducers/ExpertiseEditReducer";
import { Progress } from "../ReusableUIComponents/Spinner";
import { ExpertisesEditAction } from "../../actions/ExpertiseEditAction";
import Button from "@mui/material/Button";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
  heading: string;
  page_user_id: string;
};
type ClickProp = {
  onClick: () => void;
  heading?: string;
  page_user_id: string;
};

const Backdrop: React.FC<ClickProp> = ({ onClick, page_user_id }) => {
  return <div className="backdrop" onClick={onClick} />;
};

const ModalOverlay: React.FC<ClickProp> = ({
  onClick,
  heading,
  page_user_id,
}) => {
  const dispatch = useDispatch();
  const { token, user_id } = useTokenAndId();

  const { loading, expertises, error } = useSelector<RootStateType>(
    (state) => state.expertises
  ) as expertiseInterface;

  const {
    loading: expertisesLoading,
    expertises: expertises_edited_array,
    error: expertisesError,
  } = useSelector<RootStateType>(
    (state) => state.edit_expertises
  ) as expertiseEditReducerInterface;

  useEffect(() => {
    dispatch(ExpertiseAction(token));
  }, [token]);

  const handleEditExpertise:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    dispatch(ExpertisesEditAction(token, expertises_edited_array, onClick));
  };

  return (
    <div className="modal">
      <CloseIcon className="modal__close" onClick={onClick} />
      <div className="modal__header">
        <h2>{heading}</h2>
      </div>
      <div className="modal__selects">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="modal__selects__header"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="modal__selects__header__text">Topic</p>
            {loading && <Progress size={15} />}
          </div>
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
                  <ExpertiseDropDownListItem
                    disabled={user_id == page_user_id ? false : true}
                    topic_id={exp.topic_id}
                    title={exp.title}
                    user_id={exp.user_id}
                  />
                </div>
              )
            )}
        </div>
        {page_user_id === user_id && (
          <>
            {expertisesLoading ? (
              <button style={{ width: 110 }} className="modal__selects__button">
                <Progress size={15} />
              </button>
            ) : (
              <button
                style={{ width: 110 }}
                onClick={handleEditExpertise}
                className="modal__selects__button"
              >
                Edit
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const ExpertiseModal: React.FC<PropState> = ({
  modalHandler,
  heading,
  page_user_id,
}) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop page_user_id={page_user_id} onClick={modalHandler} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay
          page_user_id={page_user_id}
          onClick={modalHandler}
          heading={heading}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default ExpertiseModal;
