import { Dispatch } from "redux";

import { RootDispatchType } from "../stores";
import axios from "../axios";

export const UpdateImageAction =
  (token: string, image_url: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    axios
      .post(
        "/users/change-image",
        {
          image_url,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
