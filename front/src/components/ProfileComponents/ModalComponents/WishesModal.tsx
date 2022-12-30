import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../stores";
import { wishesInterface } from "../../../reducers/WishesReducer";
import { WishesAction } from "../../../actions/WishesAction";
import { Progress } from "../../ReusableUIComponents/Spinner";
import WishesDropDownListItem from "../DropdownComponents/WishesDropDownListItem";
import { WishesEditAction } from "../../../actions/WishesEditAction";
import { wishesEditReducerInterface } from "../../../reducers/WishesEditReducer";
import useTokenAndId from "../../ReusableLogicComponents/useTokenAndId";

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

  const { loading, wishes, error } = useSelector<RootStateType>(
    (state) => state.wishes
  ) as wishesInterface;

  const {
    loading: editWishesLoading,
    wishes: wishes_edited_array,
    error: wishes_edited_error,
  } = useSelector<RootStateType>(
    (state) => state.edit_wishes
  ) as wishesEditReducerInterface;

  useEffect(() => {
    dispatch(WishesAction(token));
  }, [token]);

  const handleEditWish:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    dispatch(WishesEditAction(token, wishes_edited_array, onClick));
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
          {wishes &&
            wishes.map(
              (exp: {
                topic_id: string;
                title: string;
                user_id: string | null;
              }) => (
                <div key={`${exp.topic_id}`}>
                  {/* <p>{exp.topic_id}</p> */}
                  <WishesDropDownListItem
                    disabled={user_id === page_user_id ? false : true}
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
            {editWishesLoading ? (
              <button style={{ width: 90 }} className="modal__selects__button">
                <Progress size={15} />
              </button>
            ) : (
              <button
                style={{ width: 90 }}
                onClick={handleEditWish}
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

const WishesModal: React.FC<PropState> = ({
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

export default WishesModal;
