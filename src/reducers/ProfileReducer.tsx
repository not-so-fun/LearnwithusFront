import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
  RESET_USER_INFO
} from "../constants/ProfileConstants";
import { ProfileActionTypes } from "../types/ProfileActionTypes";

export interface profileUserDataInterface {
  email: string;
  first_name: string;
  image: string;
  last_name: string;
  status: boolean | null;
  user_id: string;
  username: string;
}

const profileUserData: profileUserDataInterface = {
  email: "",
  first_name: "....",
  last_name: "....",
  image: "",
  status: null,
  user_id: "....",
  username: "....",
};

export interface profileDataInterface {
  loading: boolean;
  profile_data: profileUserDataInterface;
  error: string;
}

const profileDataState = {
  loading: false,
  profile_data: profileUserData,
  error: "",
};

export const ProfileReducer = (
  state: profileDataInterface = profileDataState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
    case PROFILE_DATA_LOADING:
      return { ...state, loading: true };
    case PROFILE_DATA_SUCCESS:
      return { ...state,loading:false, profile_data: action.profile_data };
    case PROFILE_DATA_ERROR:
      return { ...state,loading:false, error: action.error };
    case RESET_USER_INFO:
      return {...state,profile_data:action.reset_info}
    default:
      return { ...state };
  }
};
