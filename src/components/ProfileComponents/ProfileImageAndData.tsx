import React, { FC, useState } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { AiFillStar } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import storage from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { UpdateImageAction } from "../../actions/UpdateImageAction";
import {rateUserAction} from "../../actions/ProfileAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import CircularProgressWithLabel from "../ReusableUIComponents/CircularProgressWithLabel";
import {
  CHANGE_IMAGE,
  START_IMAGE_UPLOAD,
  EDIT_PROFILE_ON,
  EDIT_PROFILE_OFF,
} from "../../constants/ProfileConstants";
import { profileDataInterface } from "../../reducers/ProfileReducer";
import { RootStateType } from "../../stores";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}
type EditModalState = {
  open: boolean;
};

const ProfileImageAndData: FC<ProfileFormInterface> = ({ profile_data }) => {
  const dispatch = useDispatch();
  const [rateUser, setRateUser] = useState<boolean>(false);

  const { imageUploading, profileForm } = useSelector<RootStateType>(
    (state) => state.profile_info_data
  ) as profileDataInterface;

  const [progress, setProgess] = useState<number>(0);
  const { token } = useTokenAndId();

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
        dispatch({ type: START_IMAGE_UPLOAD });
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const body = { ...profile_data, image: downloadURL };
          dispatch(UpdateImageAction(token, downloadURL));
          dispatch({ type: CHANGE_IMAGE, image: body });
        });
      }
    );
  };
  const RateUserUI: FC = () => {
    const [rate, setRate] = useState<number>(0);
    const rateApi: React.FormEventHandler<HTMLButtonElement>= (event) =>{
      dispatch(rateUserAction(rate,profile_data.user_id, token));
    }

    return(
      <>
      <div className="CENTER" onClick={()=>setRateUser(!rateUser)}></div>
      <div className="Profile__Box__Top__ImagesAndDatas__Rate">
        <div className="Profile__Box__Top__ImagesAndDatas__Rate__Heading">
          <h1>Rate Your Experience</h1>
        </div>
        <div className="Profile__Box__Top__ImagesAndDatas__Rate__ProfileData">
          <img src={profile_data.image} className="Profile__Box__Top__ImagesAndDatas__Rate__ProfileData__Image"/>
          <div className="Profile__Box__Top__ImagesAndDatas__Rate__ProfileData__Username">
            <h1>{profile_data.username}</h1>
          </div>
        </div>
        <div className="Profile__Box__Top__ImagesAndDatas__Rate__Rating">
      <div className="star-rating" >
        <div className="back-stars">
          <i className="fa fa-star-o" aria-hidden="true" onClick={()=>setRate(1)}></i>
          <i className="fa fa-star-o" aria-hidden="true" onClick={()=>setRate(2)}></i>
          <i className="fa fa-star-o" aria-hidden="true" onClick={()=>setRate(3)}></i>
          <i className="fa fa-star-o" aria-hidden="true" onClick={()=>setRate(4)}></i>
          <i className="fa fa-star-o" aria-hidden="true" onClick={()=>setRate(5)}></i>
          
          <div className="front-stars" style={{width: `${rate * 20}%`}}>
            <i className="fa fa-star" aria-hidden="true" onClick={()=>setRate(1)}></i>
            <i className="fa fa-star" aria-hidden="true" onClick={()=>setRate(2)}></i>
            <i className="fa fa-star" aria-hidden="true" onClick={()=>setRate(3)}></i>
            <i className="fa fa-star" aria-hidden="true" onClick={()=>setRate(4)}></i>
            <i className="fa fa-star" aria-hidden="true" onClick={()=>setRate(5)}></i>
          </div>
        </div>
      </div>

      </div>
      <div className="Profile__Box__Top__ImagesAndDatas__Rate__Buttons">
        <button className="Profile__Box__Top__ImagesAndDatas__Rate__Buttons__Button" onClick={rateApi}>
          <h2>Rate</h2>
        </button>
      </div>

      </div>
      </>
    )
  }

  return (<>
  {rateUser && <RateUserUI/>}
    <div className="Profile__Box__Top__ImagesAndDatas">
      <div className="Profile__Box__Top__ImagesAndDatas__Image">
        <Avatar
          alt={profile_data.username}
          src={profile_data.image}
          style={{ width: 200, height: 200 }}
          className="Profile__Box__Top__ImagesAndDatas__Image__Avatar"
        />
        <div className="Profile__Box__Top__ImagesAndDatas__Image__Icon">
          {progress > 0 && progress < 100 && (
            <CircularProgressWithLabel
              className="Profile__Box__Top__ImagesAndDatas__Image__Icon__CircularIcon"
              value={progress}
            />
          )}
          {imageUploading && (
            <CircularProgress className="Profile__Box__Top__ImagesAndDatas__Image__Icon__CircularIcon" />
          )}
          <input
            type="file"
            className="Profile__Box__Top__ImagesAndDatas__Image__Icon__Input custom-file-input"
            onChange={formHandler}
          />
          <PhotoCameraIcon
            className="Profile__Box__Top__ImagesAndDatas__Image__Icon__Camera"
            style={progress > 0 && progress < 100 ? { display: "none" } : {}}
          />
        </div>
      </div>

      <div className="Profile__Box__Top__ImagesAndDatas__ProfileName">
        {profile_data.username}
      </div>
      <div className="star-rating" onClick={()=>setRateUser(!rateUser)}>
        <div className="back-stars">
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          
          <div className="front-stars" style={{width: `${(profile_data.rating) * 20}%`}}>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {profileForm ? (
        <button
          type="submit"
          className="Profile__Box__Top__ImagesAndDatas__Button"
          onClick={() => {
            dispatch({ type: EDIT_PROFILE_OFF });
          }}
        >
          Profile Form
        </button>
      ) : (
        <button
          type="submit"
          className="Profile__Box__Top__ImagesAndDatas__Button"
          onClick={() => {
            dispatch({ type: EDIT_PROFILE_ON });
          }}
        >
          Edit Profile
        </button>
      )}
    </div>
    </>
  );
};

export default ProfileImageAndData;
