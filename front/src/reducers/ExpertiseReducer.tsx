import { ExpertiseTypes } from "../types/ExpertiseTypes";
import {
  EXPERTISE_LOADING,
  EXPERTISE_SUCCESS,
  EXPERTISE_ERROR,
} from "../constants/ExpertiseConstants";

export interface expertiseListInterface {
  topic_id: string;
  title: string;
  user_id:string|null
}

export interface expertiseInterface {
  loading: boolean;
  expertises: expertiseListInterface[] | null;
  error: string;
}

const expertiseState: expertiseInterface = {
  loading: false,
  expertises: null,
  error: "",
};

export const ExpertiseReducer = (
  state = expertiseState,
  action: ExpertiseTypes
) => {
  switch (action.type) {
    case EXPERTISE_LOADING:
      return { ...state, loading: true };
    case EXPERTISE_SUCCESS:
      return { ...state, loading: false, expertises: action.expertises };
    case EXPERTISE_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
