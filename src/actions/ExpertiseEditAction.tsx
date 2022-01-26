import { Dispatch } from "redux";
import { RootDispatchType } from "../stores";
import axios from "../axios";
import {
  EXPERTISE_EDIT_ERROR,
  EXPERTISE_EDIT_LOAD,
  EXPERTISE_EDIT_SUCCESS,
  EXPERTISE_EDIT_TEMP,
} from "../constants/ExpertiseEditConstants";
import { expertiseEditInterface } from "../reducers/ExpertiseEditReducer";

export const ExpertisesEditAction =
  (
    token: string,
    expertises_edited_object: expertiseEditInterface[],
    onClick: () => void
  ) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: EXPERTISE_EDIT_LOAD });

    axios
      .post(
        "/expertise",
        {
          expertises: expertises_edited_object,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
<<<<<<< HEAD
        // console.log(response.data);
=======
        console.log(response.data);
>>>>>>> 2e1b2dc (added reducers for expertise add and remove)
        dispatch({ type: EXPERTISE_EDIT_SUCCESS });
        onClick();
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: EXPERTISE_EDIT_ERROR, error: error.response.data });
      });
  };
