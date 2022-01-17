import {
  EXPERTISE_LOADING,
  EXPERTISE_ERROR,
  EXPERTISE_SUCCESS,
} from "../constants/ExpertiseConstants";
import { expertiseListInterface } from "../reducers/ExpertiseReducer";

interface expertiseStarted {
  type: typeof EXPERTISE_LOADING;
}

interface expertiseSuccess {
  type: typeof EXPERTISE_SUCCESS;
  expertises: expertiseListInterface[] | null;
}

interface expertiseError {
  type: typeof EXPERTISE_ERROR;
  error: string;
}

export type ExpertiseTypes =
  | expertiseStarted
  | expertiseSuccess
  | expertiseError;
