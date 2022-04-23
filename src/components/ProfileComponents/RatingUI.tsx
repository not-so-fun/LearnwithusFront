import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { rateUserAction } from "../../actions/ProfileAction";
import { profileUserDataInterface } from "../../reducers/ProfileReducer";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";

interface ProfileFormInterface {
  profile_data: profileUserDataInterface;
}

const RateUserUI: FC<ProfileFormInterface> = ({ profile_data }) => {
  //   const dispatch = useDispatch();
  // //   const { token, user_id } = useTokenAndId();
  // //   const [rateUser, setRateUser] = useState<boolean>(false);
  // //   const [rate, setRate] = useState<number>(0);

  // //   const rateApi: React.FormEventHandler<HTMLButtonElement> = (event) => {
  // //     dispatch(rateUserAction(rate, profile_data.user_id, token));
  // //   };

  return (
    <>
      <div className="star-rating">
        <div className="back-stars">
          <i
            style={{ fontSize: 25 }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>
          <i
            style={{ fontSize: 25 }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>
          <i
            style={{ fontSize: 25 }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>
          <i
            style={{ fontSize: 25 }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>
          <i
            style={{ fontSize: 25 }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>

          <div
            className="front-stars"
            style={{ width: `${profile_data.rating * 20}%` }}
          >
            <i
              style={{ fontSize: 25 }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
            <i
              style={{ fontSize: 25 }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
            <i
              style={{ fontSize: 25 }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
            <i
              style={{ fontSize: 25 }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
            <i
              style={{ fontSize: 25 }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateUserUI;
