import {
  WISHES_LOADING,
  WISHES_ERROR,
  WISHES_SUCCESS,
} from "../constants/WishesConstants";
// import { expertiseListInterface } from "../reducers/ExpertiseReducer";

import { wishesListInterface } from "../reducers/WishesReducer";

interface wishesStarted {
  type: typeof WISHES_LOADING;
}

interface wishesSuccess {
  type: typeof WISHES_SUCCESS;
  wishes: wishesListInterface[] | null;
}

interface wishesError {
  type: typeof WISHES_ERROR;
  error: string;
}

export type WishesTypes = wishesStarted | wishesSuccess | wishesError;
