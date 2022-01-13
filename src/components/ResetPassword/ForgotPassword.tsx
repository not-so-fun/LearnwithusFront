import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../stores";
import { ForgotPasswordStateInterface } from "../../reducers/ForgotPasswordReducer";
import { Progress } from "../ReusableUIComponents/Spinner";

const ForgotPassword: FC = () => {
  const { loading, error } = useSelector<RootStateType>(
    (state) => state.forgot_password
  ) as ForgotPasswordStateInterface;

  return (
    <div className="ForgetPassword">
      <div className="ForgetPassword__InnerDiv">
        <h1 className="ForgetPassword__InnerDiv__Heading">Forgot password</h1>
        <p className="ForgetPassword__InnerDiv__text">
          Enter the email associated with your account and we'll send an email
          with instruction to reset your password.
        </p>
        <form>
          <div className="ForgetPassword__InnerDiv__Form">
            <div className="ForgetPassword__InnerDiv__Form__Heading">
              Email address
            </div>
            <input
              id="email"
              className="ForgetPassword__InnerDiv__Form__Input"
              name="email"
              placeholder="email"
            />
          </div>
          <button className="ForgetPassword__InnerDiv__Form__Button">
            {loading ? <Progress size={25} /> : "Send Email"}
          </button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
