import React, { FC, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../stores";
import { ForgotPasswordStateInterface } from "../../reducers/ForgotPasswordReducer";
import { ForgotPasswordAction } from "../../actions/ForgotPasswordAction";
import { Alert } from "@mui/material";
import { Progress } from "../ReusableUIComponents/Spinner";

const ForgotPassword: FC = () => {
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[])

  const [email, setEmail] = useState<string>("");

  const { loading, message, error } = useSelector<RootStateType>(
    (state) => state.forgot_password
  ) as ForgotPasswordStateInterface;

  const handleSendEmail: React.FormEventHandler<HTMLFormElement> | undefined = (
    e: FormEvent
  ) => {
    e.preventDefault();
    dispatch(ForgotPasswordAction(email));
  };

  return (
    <div className="ForgetPassword">
      <div className="ForgetPassword__InnerDiv">
        <h1 className="ForgetPassword__InnerDiv__Heading">Forgot password</h1>

        <p className="ForgetPassword__InnerDiv__text">
          Enter the email associated with your account and we'll send an email
          with instruction to reset your password.
        </p>
        <form onSubmit={handleSendEmail}>
          <div className="ForgetPassword__InnerDiv__Form">
            <div className="ForgetPassword__InnerDiv__Form__Heading">
              Email address
            </div>
            <input
              id="email"
              className="ForgetPassword__InnerDiv__Form__Input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          {loading ? (
            <button disabled className="ForgetPassword__InnerDiv__Form__Button">
              <Progress size={25} />
            </button>
          ) : (
            <button className="ForgetPassword__InnerDiv__Form__Button">
              Send Email
            </button>
          )}

          {error && (
            <div
              style={{
                color: "red",
                fontSize: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {error}
            </div>
          )}
        </form>
        <div
          style={{ marginTop: 10 }}
          className="ForgetPassword__InnerDiv__ConfirmImageDiv"
        >
          {message && (
            <Alert icon={false} style={{ fontSize: 15 }} severity="success">
              {message}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
