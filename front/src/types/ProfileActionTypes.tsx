import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
  RESET_USER_INFO,
  CHANGE_IMAGE,
  CHANGE_PROFILE_APPROACH_STATUS,
  START_IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  EDIT_PROFILE_ON,
  EDIT_PROFILE_OFF,
  RATE_PROFILE_STARTED,
  RATE_PROFILE_SUCCESS,
  RATE_PROFILE_ERROR
} from "../constants/ProfileConstants";
import {profileUserDataInterface} from "../reducers/ProfileReducer"

interface profileDataLoading {
  type: typeof PROFILE_DATA_LOADING;
}
interface ratingLoading{
  type: typeof RATE_PROFILE_STARTED;
}
interface ratingSuccess{
  type:typeof RATE_PROFILE_SUCCESS;
}
interface ratingError{
  type:typeof RATE_PROFILE_ERROR;
  ratingError: string;
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

interface editProfileApproachStatus{
  type:typeof CHANGE_PROFILE_APPROACH_STATUS;
  status:null|"pending"|"accepted"
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
  |editProfileOff
  |ratingLoading
  |ratingSuccess
  |editProfileApproachStatus
  |ratingError;
