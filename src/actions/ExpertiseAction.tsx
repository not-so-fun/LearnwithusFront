import Dispatch from "redux";
import {
  EXPERTISE_LOADING,
  EXPERTISE_SUCCESS,
  EXPERTISE_ERROR,
} from "../constants/ExpertiseConstants";
import RootDispatchType from "../stores";
import axios from "../axios";

export const ExpertiseAction = (token: string) => (dispatch: any) => {
  dispatch({ type: EXPERTISE_LOADING });
  axios
    .get("/topics/with_my_expertise", {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((response) => {
<<<<<<< HEAD
      // console.log(response.data);
=======
      console.log(response.data);
>>>>>>> 2e1b2dc (added reducers for expertise add and remove)
      dispatch({type:EXPERTISE_SUCCESS,expertises:response.data})
    })
    .catch((error) => {
    //   console.log(error);
      dispatch({type:EXPERTISE_ERROR,error:error.response.data})

    });
};
