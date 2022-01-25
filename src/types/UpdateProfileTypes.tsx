import {
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_LOAD,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/UpdateProfileConstants";

interface updateProfileLoadType {
  type: typeof UPDATE_PROFILE_LOAD;
}

interface updateProfileSuccessType {
  type: typeof UPDATE_PROFILE_SUCCESS;
}

interface updatedProfileErrorType {
  type: typeof UPDATE_PROFILE_ERROR;
  error: string;
}

export type UpdateProfileAction =
  | updateProfileLoadType
  | updateProfileSuccessType
  | updatedProfileErrorType;
