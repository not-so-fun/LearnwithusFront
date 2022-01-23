import {
  WISHES_EDIT_LOAD,
  WISHES_EDIT_SUCCESS,
  WISHES_EDIT_ERROR,
  WISHES_EDIT_TEMP,
} from "../constants/WishesEditConstants";
import { wishesEditInterface } from "../reducers/WishesEditReducer";

interface wishesLoadAction {
  type: typeof WISHES_EDIT_LOAD;
}

interface wishesTempAction {
  type: typeof WISHES_EDIT_TEMP;
  wish: wishesEditInterface;
}

interface wishesSuccessAction {
  type: typeof WISHES_EDIT_SUCCESS;
}

interface wishesErrorAction {
  type: typeof WISHES_EDIT_ERROR;
  error: string;
}

export type WishesEditTypes =
  | wishesLoadAction
  | wishesSuccessAction
  | wishesTempAction
  | wishesErrorAction;
