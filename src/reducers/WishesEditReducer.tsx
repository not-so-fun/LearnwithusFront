import {
  WISHES_EDIT_LOAD,
  WISHES_EDIT_SUCCESS,
  WISHES_EDIT_ERROR,
  WISHES_EDIT_TEMP,
} from "../constants/WishesConstants";
import { WishesEditTypes } from "../types/";

export interface wishesEditInterface {
  topic_id: string;
  nature: "add" | "remove";
}

export interface wishesEditReducerInterface {
  loading: boolean;
  wishes: wishesEditInterface[];
  error: string;
}

const wishesEditState: wishesEditReducerInterface = {
  loading: false,
  wishes: [],
  error: "",
};

export const WishesEditReducer = (
  state = wishesEditState,
  action: WishesEditTypes
) => {
  switch (action.type) {
    case WISHES_EDIT_LOAD:
      return { ...state, loading: true };
    case WISHES_EDIT_TEMP:
      if (action.wish.nature === "add") {
        const a: wishesEditInterface | undefined = state.wishes.find(
          (e: wishesEditInterface) =>
            e.topic_id === action.wish.topic_id && e.nature === "remove"
        );
        if (a === undefined) {
          return { ...state, wishes: [...state.wishes, action.wish] };
        } else {
          state.wishes = state.wishes.filter(
            (e: wishesEditInterface) => e.topic_id !== action.wish.topic_id
          );
          return { ...state };
        }
      } else {
        const a: wishesEditInterface | undefined = state.wishes.find(
          (e: wishesEditInterface) =>
            e.topic_id === action.wish.topic_id && e.nature === "add"
        );
        if (a === undefined) {
          return { ...state, wishes: [...state.wishes, action.wish] };
        } else {
          state.wishes = state.wishes.filter(
            (e: wishesEditInterface) => e.topic_id !== action.wish.topic_id
          );
          return { ...state };
        }
      }
    case WISHES_EDIT_SUCCESS:
      return { ...state, loading: false, wishes: [] };
    case WISHES_EDIT_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
