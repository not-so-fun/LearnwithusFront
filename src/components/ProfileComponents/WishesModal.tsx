import React, { useState } from "react";
import { createPortal } from "react-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ModalState } from "./ProfileStats";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RootStateType } from "../../stores";
import { wishesInterface } from "../../reducers/WishesReducer";
import { WishesAction } from "../../actions/WishesAction";
import { Progress } from "../ReusableUIComponents/Spinner";
import WishesDropDownListItem from "./ModalComponents/WishesDropDownListItem";

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
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const { loading, wishes, error } = useSelector<RootStateType>(
    (state) => state.wishes
  ) as wishesInterface;

  const handleShowTopics:
    | React.MouseEventHandler<SVGSVGElement>
    | undefined = () => {
    setShowTopic({ ...showTopic, show: !showTopic.show });
    dispatch(WishesAction(token));
  };

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
            onClick={handleShowTopics}
          />
        </div>

        {showTopic.show && (
          <div className="modal__selects__dropdown">
            {loading ? (
              <Progress size={25} />
            ) : (
              <>
                {wishes &&
                  wishes.map(
                    (exp: {
                      topic_id: string;
                      title: string;
                      user_id: string | null;
                    }) => (
                      <div key={exp.topic_id}>
                        {/* <TopicDropDownListItem

                          title={exp.title}
                          user_id={exp.user_id}
                        /> */}
                        <WishesDropDownListItem
                          title={exp.title}
                          user_id={exp.user_id}
                        />
                      </div>
                    )
                  )}
              </>
            )}
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
