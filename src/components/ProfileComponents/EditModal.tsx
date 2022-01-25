import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";

// import { Progress } from "../ReusableUIComponents/Spinner";

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
  //   const dispatch = useDispatch();
  //   const { token } = useTokenAndId();

  //   const { loading, expertises, error } = useSelector<RootStateType>(
  //     (state) => state.expertises
  //   ) as expertiseInterface;

  //   useEffect(() => {
  //     dispatch(ExpertiseAction(token));
  //   }, [token]);

  return (
    <div className="editModal">
      <h1 className="editModal__Header">Edit Your Profile</h1>
      <div className="editModal__Form">
        <form className="editModal__Form__Control">
          <div className="editModal__Form__Control__Div__Name">
            <div className="editModal__Form__Control__Div__Name__First">
              <label
                htmlFor="firstname"
                className="editModal__Form__Control__Label"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                className="editModal__Form__Control__Input"
                placeholder="First Name"
              />
            </div>
            <div className="editModal__Form__Control__Div__Name__Last">
              <label
                htmlFor="lastname"
                className="editModal__Form__Control__Label"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="editModal__Form__Control__Input"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="editModal__Form__Control__Div">
            <label
              htmlFor="username"
              className="editModal__Form__Control__Label"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="editModal__Form__Control__Input"
              placeholder="Username"
            />
          </div>

          <div className="editModal__Form__Control__Button">
            <button
              type="button"
              className="editModal__Form__Control__Button__Cancel"
              onClick={onClick}
            >
              Cancel
            </button>
            <button className="editModal__Form__Control__Button__Edit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EditModal: React.FC<PropState> = ({ modalHandler }) => {
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

export default EditModal;
