import {
  PROFILE_DATA_LOADING,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_ERROR,
} from "../constants/ProfileConstants";

interface profileDataLoading {
  type: typeof PROFILE_DATA_LOADING;
}

interface profileDataSuccess {
  type: typeof PROFILE_DATA_SUCCESS;
  profile_data: null;
}

interface profileDataError {
  type: typeof PROFILE_DATA_ERROR;
  error: string;
}

export type ProfileActionTypes =
  | profileDataLoading
  | profileDataSuccess
  | profileDataError;
