import {
  EXPERTISE_EDIT_LOAD,
  EXPERTISE_EDIT_SUCCESS,
  EXPERTISE_EDIT_ERROR,
  EXPERTISE_EDIT_TEMP,
} from "../constants/ExpertiseEditConstants";
import { ExpertiseEditTypes } from "../types/ExpertiseEditTypes";

export interface expertiseEditInterface {
  topic_id: string;
  nature: "add" | "remove";
}

export interface expertiseEditReducerInterface {
  loading: boolean;
  expertises: expertiseEditInterface[];
  error: string;
}

const expertiseEditState: expertiseEditReducerInterface = {
  loading: false,
  expertises: [],
  error: "",
};

export const ExpertisesEditReducer = (
  state = expertiseEditState,
  action: ExpertiseEditTypes
) => {
  switch (action.type) {
    case EXPERTISE_EDIT_LOAD:
      return { ...state, loading: true };
    case EXPERTISE_EDIT_TEMP:
      if (action.expertise.nature === "add") {
        const a: expertiseEditInterface | undefined = state.expertises.find(
          (e: expertiseEditInterface) =>
            e.topic_id === action.expertise.topic_id && e.nature === "remove"
        );
        if (a === undefined) {
          return {
            ...state,
            expertises: [...state.expertises, action.expertise],
          };
        } else {
          state.expertises = state.expertises.filter(
            (e: expertiseEditInterface) =>
              e.topic_id !== action.expertise.topic_id
          );
          return { ...state };
        }
      } else {
        const a: expertiseEditInterface | undefined = state.expertises.find(
          (e: expertiseEditInterface) =>
            e.topic_id === action.expertise.topic_id && e.nature === "add"
        );
        if (a === undefined) {
          return {
            ...state,
            expertises: [...state.expertises, action.expertise],
          };
        } else {
          state.expertises = state.expertises.filter(
            (e: expertiseEditInterface) =>
              e.topic_id !== action.expertise.topic_id
          );
          return { ...state };
        }
      }
    case EXPERTISE_EDIT_SUCCESS:
      return { ...state, loading: false, expertises: [] };
    case EXPERTISE_EDIT_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
