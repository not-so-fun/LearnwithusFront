import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
  RESET_USER_INFO,
  CHANGE_IMAGE,
  START_IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  EDIT_PROFILE_ON,
  EDIT_PROFILE_OFF
} from "../constants/ProfileConstants";
import {profileUserDataInterface} from "../reducers/ProfileReducer"

interface profileDataLoading {
  type: typeof PROFILE_DATA_LOADING;
}

interface profileDataSuccess {
  type: typeof PROFILE_DATA_SUCCESS;
  profile_data:profileUserDataInterface| null;
}

interface profileDataError {
  type: typeof PROFILE_DATA_ERROR;
  error: string;
}

interface profileDataReset {
  type: typeof RESET_USER_INFO;
  reset_info:profileUserDataInterface
}
interface changeImage{
  type:typeof CHANGE_IMAGE;
  image:string;
}
interface startImage{
  type:typeof START_IMAGE_UPLOAD;
}
interface successImage{
  type:typeof IMAGE_UPLOAD_SUCCESS;
}
interface editProfileOn{
  type:typeof EDIT_PROFILE_ON;
}
interface editProfileOff{
  type:typeof EDIT_PROFILE_OFF;
}


export type ProfileActionTypes =
  | profileDataLoading
  | profileDataSuccess
  | profileDataError
  | profileDataReset
  | changeImage
  |startImage
  |successImage
  |editProfileOn
  |editProfileOff;
