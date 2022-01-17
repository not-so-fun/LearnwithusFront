import React, { useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ModalState } from "./ProfileStats";
import CloseIcon from "@mui/icons-material/Close";

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
  const [showTopic, setShowTopic] = useState<ShowState>({ show: false });
  const [showSubTopic, setShowSubTopic] = useState<ShowState>({ show: false });

  return (
    <div className="modal">
      <CloseIcon className="modal__close" onClick={onClick} />
      <div className="modal__header">
        <h2>{heading}</h2>
      </div>
      <div className="modal__selects">
        <div className="modal__selects__header">
          <p className="modal__selects__header__text">Topic</p>
          <ArrowDropDownIcon
            className="modal__selects__header__arrow"
            onClick={() => {
              setShowTopic({ show: !showTopic.show });
            }}
          />
        </div>
        
        {showTopic.show && (
          <div className="modal__selects__dropdown">
            <div className="modal__selects__dropdown__item">
              <input
                type="checkbox"
                className="modal__selects__dropdown__item__checkbox"
              />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input
                type="checkbox"
                className="modal__selects__dropdown__item__checkbox"
              />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input
                type="checkbox"
                className="modal__selects__dropdown__item__checkbox"
              />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input
                type="checkbox"
                className="modal__selects__dropdown__item__checkbox"
              />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SUBTOPIC */}
      <div className="modal__selects">
        <div className="modal__selects__header">
          <p className="modal__selects__header__text">Sub-Topic</p>
          <ArrowDropDownIcon
            className="modal__selects__header__arrow"
            onClick={() => {
              setShowSubTopic({ show: !showSubTopic.show });
            }}
          />
        </div>
        {showSubTopic.show && (
          <div className="modal__selects__dropdown">
            <div className="modal__selects__dropdown__item">
              <input type="checkbox" />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input type="checkbox" />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input type="checkbox" />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
            <div className="modal__selects__dropdown__item">
              <input type="checkbox" />{" "}
              <p className="modal__selects__dropdown__item__text">
                Electrostat
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const WishesModal: React.FC<PropState> = ({ modalHandler, heading }) => {
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

export default WishesModal;
