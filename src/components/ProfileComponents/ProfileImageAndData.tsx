import React, { FC } from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import { AiFillStar } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}

const ProfileImageAndData: FC<ProfileFormInterface> = ({ profile_data }) => {
  return (
    <div className="Profile__Box__Top__ImagesAndDatas">
      <div className="Profile__Box__Top__ImagesAndDatas__Image">
        <Avatar
          alt={profile_data.username}
          src={profile_data.image}
          style={{ width: 200, height: 200 }}
        />
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
    </div>
  );
};

export default ProfileImageAndData;
