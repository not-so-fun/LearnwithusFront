import React, { FC, useState} from "react";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { UpdateProfileAction } from "../../actions/UpdateProfileAction";
import {useDispatch} from "react-redux";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}

const ProfileFormEdit: FC<ProfileFormInterface> = ({ profile_data }) => {
    interface ProfileFormData {
        first_name:string;
        last_name:string;
        username:string;
    }
    const [profileForm, setProfileForm] = useState<ProfileFormData>({
        first_name:profile_data.first_name,
        last_name:profile_data.last_name,
        username:profile_data.username
    }as ProfileFormData);
    const {first_name, last_name,username} = profileForm;
    const { token } = useTokenAndId();
     const dispatch= useDispatch();
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setProfileForm({ ...profileForm, [event.target.name]: event.target.value });
      };
      const  onSubmit: React.FormEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        dispatch(UpdateProfileAction(token, username, first_name, last_name));
        
      };
  return (
    <div className="Profile__Box__Top__Information">
      <div className="Profile__Box__Top__Information__Name">
        <div className="Profile__Box__Top__Information__Name__firstName">
          <p>Firstname</p>
          <input 
          type="text"
          name="first_name" 
          className="Profile__Box__Top__Information__Name__firstName__Box"
          value={first_name}
          onChange={onChangeHandler}
          />
        </div>
        <div className="Profile__Box__Top__Information__Name__lastName">
          <p>Lastname</p>
          <input type="text" className="Profile__Box__Top__Information__Name__lastName__Box"
          name="last_name"
          value={last_name}
          onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Username</p>
        <input 
        type="text"
        name="username" 
        className="Profile__Box__Top__Information__BasicInfo__Box" 
        value={username}
        onChange={onChangeHandler}
        /> 
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Location</p>
        <div className="Profile__Box__Top__Information__BasicInfo__Box">
        <h4>Solukhumbu</h4>
        </div> 
      </div>
      {/* <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Interest</p>
        <div  className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>Web Development</h4>
        </div>
      </div>
      <div className="Profile__Box__Top__Information__BasicInfo">
        <p>Expertise</p>
        <div  className="Profile__Box__Top__Information__BasicInfo__Box">
          <h4>Front and Back End</h4>
        </div>
      </div> */}
      <div className="Profile__Box__Top__Information__Buttons">
          <button onClick={onSubmit} className="Profile__Box__Top__Information__Buttons__Button"><h3>Edit</h3></button>
      </div>
    </div>
  );
};

export default ProfileFormEdit;
