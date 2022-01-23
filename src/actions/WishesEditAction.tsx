import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";
import axios from "../axios";
import {
  WISHES_EDIT_LOAD,
  WISHES_EDIT_SUCCESS,
  WISHES_EDIT_ERROR,
} from "../constants/WishesEditConstants";
import { tokenToString } from "typescript";
import { wishesEditInterface } from "../reducers/WishesEditReducer";

export const WishesEditAction =
  (token: string, wishes_edited_object: wishesEditInterface[],onClick: () => void) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: WISHES_EDIT_LOAD });

    axios
      .post(
        "/wishes",
        {
          wishes: wishes_edited_object,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({ type: WISHES_EDIT_SUCCESS });
        onClick()
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: WISHES_EDIT_ERROR, error: error.response.data });
      });
  };
