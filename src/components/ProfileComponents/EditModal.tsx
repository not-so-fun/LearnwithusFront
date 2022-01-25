import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import CloseIcon from "@mui/icons-material/Close";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateProfileReducerInterface } from "../../reducers/UpdateProfileReducer";
import { UpdateProfileAction } from "../../actions/UpdateProfileAction";
import { RootStateType } from "../../stores";
import { profileDataInterface } from "../../reducers/ProfileReducer";
import { Progress } from "../ReusableUIComponents/Spinner";

type ShowState = {
  show: boolean;
};
type PropState = {
  modalHandler: () => void;
};
type ClickProp = {
  onClick: () => void;
};

interface userEditInterface {
  username: string;
  first_name: string;
  last_name: string;
}

const Backdrop: React.FC<ClickProp> = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick} />;
};

const ModalOverlay: React.FC<ClickProp> = ({ onClick }) => {
  const dispatch = useDispatch();
  const { token } = useTokenAndId();

  const [userData, setUserData] = useState<userEditInterface>({
    username: "",
    first_name: "",
    last_name: "",
  });

  const { username, first_name, last_name } = userData;

  const { profile_data } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  useEffect(() => {
    setUserData({
      ...userData,
      username: profile_data.username,
      first_name: profile_data.first_name,
      last_name: profile_data.last_name,
    });
  }, [profile_data]);

  const { loading, error } = useSelector<RootStateType>(
    (state) => state.updateUserInfo
  ) as updateProfileReducerInterface;

  const handleUpdateProfileData:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile:
  React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault()
    dispatch(
      UpdateProfileAction(token, username, first_name, last_name, onClick)
    );
  };

  return (
    <div className="editModal">
      <h1 className="editModal__Header">Edit Your Profile</h1>
      <div className="editModal__Form">
        <form onSubmit={handleUpdateProfile} className="editModal__Form__Control">
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
                value={first_name}
                onChange={(e) => handleUpdateProfileData(e)}
                name="first_name"
                className="editModal__Form__Control__Input"
<<<<<<< HEAD
                placeholder="First Name"
=======
                required
>>>>>>> c7cfa7e4e5d2f87abfbbfb6cef1ced19424dd3d7
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
                value={last_name}
                onChange={(e) => handleUpdateProfileData(e)}
                name="last_name"
                className="editModal__Form__Control__Input"
<<<<<<< HEAD
                placeholder="Last Name"
=======
                required

>>>>>>> c7cfa7e4e5d2f87abfbbfb6cef1ced19424dd3d7
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
              value={username}
              onChange={(e) => handleUpdateProfileData(e)}
              name="username"
              className="editModal__Form__Control__Input"
<<<<<<< HEAD
              placeholder="Username"
=======
              required

>>>>>>> c7cfa7e4e5d2f87abfbbfb6cef1ced19424dd3d7
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
            {loading ? (
              <button className="editModal__Form__Control__Button__Edit">
                <Progress size={15} />
              </button>
            ) : (
              <button
               
                className="editModal__Form__Control__Button__Edit"
              >
                Edit
              </button>
            )}
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
