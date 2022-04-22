import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
  RESET_USER_INFO,
  CHANGE_IMAGE,
  START_IMAGE_UPLOAD,
  EDIT_PROFILE_ON,
  EDIT_PROFILE_OFF,
  RATE_PROFILE_STARTED,
  RATE_PROFILE_SUCCESS,
  RATE_PROFILE_ERROR,
  CHANGE_PROFILE_APPROACH_STATUS,
} from "../constants/ProfileConstants";

import { ProfileActionTypes } from "../types/ProfileActionTypes";

export interface profileUserDataInterface {
  user_id: string;
  first_name: string;
  last_name: string;
  username: string;
  image: string;
  rating: number;
  approachStatus: null | "pending" | "accepted";
  total_questions_answered: number;
  total_questions_asked: number;

}

const profileUserData: profileUserDataInterface = {
  first_name: "",
  last_name: "",
  image: "",
  user_id: "",
  username: "",
  rating: 0,
  approachStatus: null,
  total_questions_answered:0,
  total_questions_asked:0
};

export interface profileDataInterface {
  loading: boolean;
  profile_data: profileUserDataInterface;
  error: string;
  imageUploading: boolean;
  profileForm: boolean;
}

const profileDataState = {
  loading: false,
  profile_data: profileUserData,
  error: "",
  imageUploading: false,
  profileForm: false,
};

export const ProfileReducer = (
  state: profileDataInterface = profileDataState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
    case PROFILE_DATA_LOADING:
      return { ...state, loading: true };
    case PROFILE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        profile_data: action.profile_data,
        approachStatus: action.profile_data?.approachStatus,
        imageUploading: false,
      };
    case PROFILE_DATA_ERROR:
      return { ...state, loading: false, error: action.error };
    case RESET_USER_INFO:
      return { ...state, profile_data: action.reset_info };
    case START_IMAGE_UPLOAD:
      return { ...state, imageUploading: true };
    case CHANGE_IMAGE:
      return { ...state, profile_data: action.image, imageUploading: false };
    case EDIT_PROFILE_ON:
      return { ...state, profileForm: true };
    case EDIT_PROFILE_OFF:
      return { ...state, profileForm: false };
    case RATE_PROFILE_STARTED:
      return { ...state, rating: true };
    case RATE_PROFILE_SUCCESS:
      return { ...state, rating: false };
    case CHANGE_PROFILE_APPROACH_STATUS:
      return { ...state, approachStatus: action.status };
    case RATE_PROFILE_ERROR:
      return { ...state, rating: false, ratingError: action.ratingError };

    default:
      return { ...state };
  }
};
