import Dispatch from "redux";
import {
  WISHES_LOADING,
  WISHES_SUCCESS,
  WISHES_ERROR,
} from "../constants/WishesConstants";
import RootDispatchType from "../stores";
import axios from "../axios";

export const WishesAction = (token: string) => (dispatch: any) => {
  dispatch({ type: WISHES_LOADING });
  axios
    .get("/topics/with_my_wishes", {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      dispatch({ type: WISHES_SUCCESS, wishes: response.data });
    })
    .catch((error) => {
      //   console.log(error);
      dispatch({ type: WISHES_ERROR, error: error.response.data });
    });
};
