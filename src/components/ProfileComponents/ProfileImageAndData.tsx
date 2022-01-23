import React, { FC, useState } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { AiFillStar } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import EditModal from "../ProfileComponents/EditModal";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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

  const modalHandler = () => {
    setOpenModal({ ...openModal, open: !openModal.open });
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
