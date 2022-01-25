import React, { FC, useState } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { AiFillStar } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import EditModal from "../ProfileComponents/EditModal";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import storage from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Progress } from "../ReusableUIComponents/Spinner";
import {UpdateImageAction} from "../../actions/UpdateImageAction"
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch } from "react-redux";


interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}
type EditModalState = {
  open: boolean;
};

const ProfileImageAndData: FC<ProfileFormInterface> = ({ profile_data }) => {
  const [openModal, setOpenModal] = useState<EditModalState>({
    open: false,
  });

  const dispatch=useDispatch()

  const [progress, setProgess] = useState<number>(0);
  const {token}=useTokenAndId()

  const modalHandler = () => {
    setOpenModal({ ...openModal, open: !openModal.open });
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file: any) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgess(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          dispatch(UpdateImageAction(token,downloadURL))

        });
      }
    );
  };

  return (
    <div className="Profile__Box__Top__ImagesAndDatas">
      <div className="Profile__Box__Top__ImagesAndDatas__Image">
        <Avatar
          alt={profile_data.username}
          src={profile_data.image}
          style={{ width: 200, height: 200 }}
          className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
        />
        <div className="Profile__Box__Top__ImagesAndDatas__Image__Icon">
          {/* <Progress size={15} /> */}
          <PhotoCameraIcon className="Profile__Box__Top__ImagesAndDatas__Image__Icon__Camera" />
        </div>
      </div>

      <div className="Profile__Box__Top__ImagesAndDatas__ProfileName">
        {profile_data.username}
      </div>
      <div className="Profile__Box__Top__ImagesAndDatas__Rating">
        <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star" />
        <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star" />
        <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star" />
        <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star" />
        <AiFillStar className="Profile__Box__Top__ImagesAndDatas__Rating__Star" />
      </div>

      <button
        type="submit"
        className="Profile__Box__Top__ImagesAndDatas__Button"
        onClick={() => {
          setOpenModal({ open: !openModal.open });
        }}
      >
        Edit Profile
      </button>
      {openModal.open && <EditModal modalHandler={modalHandler} />}
    </div>
  );
};

export default ProfileImageAndData;
