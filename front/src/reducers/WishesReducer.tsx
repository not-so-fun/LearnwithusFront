import { WishesTypes } from "../types/WishesTypes";
import {
  WISHES_LOADING,
  WISHES_SUCCESS,
  WISHES_ERROR,
} from "../constants/WishesConstants";

export interface wishesListInterface {
  topic_id: string;
  title: string;
  user_id: string | null;
}

export interface wishesInterface {
  loading: boolean;
  wishes: wishesListInterface[] | null;
  error: string;
}

const wishesState: wishesInterface = {
  loading: false,
  wishes: null,
  error: "",
};

export const WishesReducer = (state = wishesState, action: WishesTypes) => {
  switch (action.type) {
    case WISHES_LOADING:
      return { ...state, loading: true };
    case WISHES_SUCCESS:
      return { ...state, loading: false, wishes: action.wishes };
    case WISHES_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
