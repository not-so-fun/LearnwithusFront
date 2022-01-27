import React, { FC, useState } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { AiFillStar } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import EditModal from "../ProfileComponents/EditModal";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import storage from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {UpdateImageAction} from "../../actions/UpdateImageAction"
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch,useSelector } from "react-redux";
import { CircularProgress } from '@mui/material';
import CircularProgressWithLabel from "../ReusableUIComponents/CircularProgressWithLabel";
import {CHANGE_IMAGE,START_IMAGE_UPLOAD,IMAGE_UPLOAD_SUCCESS} from "../../constants/ProfileConstants";
import { profileDataInterface } from "../../reducers/ProfileReducer";
import { RootStateType } from "../../stores";
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

  const dispatch=useDispatch();
  const {imageUploading} = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  const [progress, setProgess] = useState<number>(0);
  const {token}=useTokenAndId()

  const modalHandler = () => {
    setOpenModal({ ...openModal, open: !openModal.open });
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    
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
        dispatch({type:START_IMAGE_UPLOAD});
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          
          const body= {...profile_data, image:downloadURL}
          dispatch(UpdateImageAction(token,downloadURL));
          dispatch({type:CHANGE_IMAGE, image:downloadURL});
          
          
          
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
          
          {(progress>0 && progress<100) 
          && 
          <CircularProgressWithLabel 
          className="Profile__Box__Top__ImagesAndDatas__Image__Icon__CircularIcon" 
          value={progress}
          />}
          { imageUploading&&<CircularProgress
          className="Profile__Box__Top__ImagesAndDatas__Image__Icon__CircularIcon" 
          />}
          <input type="file" className="Profile__Box__Top__ImagesAndDatas__Image__Icon__Input custom-file-input"
          onChange={formHandler}/>
          <PhotoCameraIcon 
          className="Profile__Box__Top__ImagesAndDatas__Image__Icon__Camera" 
          style={(progress>0 && progress<100) ? {display:"none"}:{}}
          />
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
