import React, { FC, FormEvent, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { RootStateType } from "../../stores";
import { Progress } from "../ReusableUIComponents/Spinner";
import { ResetPasswordActions } from "../../actions/ResetPasswordAction";
import { ResetPasswordStateInterface } from "../../reducers/ResetPasswordReducer";
import { Alert } from "@mui/material";

const ResetPassword: FC<RouteComponentProps<any>> = () => {
  const dispatch = useDispatch();
  const search = useLocation().search;

  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const { loading, message, error } = useSelector<RootStateType>(
    (state) => state.reset_password
  ) as ResetPasswordStateInterface;

  const handlePasswordReset:
    | React.FormEventHandler<HTMLFormElement>
    | undefined = (e: FormEvent) => {
    e.preventDefault();
    let token = new URLSearchParams(search).get("token");
    if (token == null) token = "";
    dispatch(ResetPasswordActions(password, token));
  };

  return (
    <div className="ForgetPassword">
      <div className="ForgetPassword__InnerDiv">
        <h1 className="ForgetPassword__InnerDiv__Heading">
          Create new password
        </h1>

        <form onSubmit={handlePasswordReset}>
          <div className="ForgetPassword__InnerDiv__Form">
            <div className="ForgetPassword__InnerDiv__Form__Heading">
              New Password
            </div>
            <div className="Auth__Box__InputBox__InputHandler__InputBox">
              <input
                id="new_password"
                className="Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                name="new_password"
                // type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onChange={handleChange}
              />
              {true ? (
                <button
                  className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                  //   onClick={ShowPassword}
                >
                  <BsEyeSlashFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                </button>
              ) : (
                <button
                  className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                  //   onClick={ShowPassword}
                >
                  <BsEyeFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                </button>
              )}
            </div>

            <div className="ForgetPassword__InnerDiv__Form__Heading">
              Confrim Password
            </div>
            <div className="Auth__Box__InputBox__InputHandler__InputBox">
              <input
                id="confrim-password"
                className="Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                name="confirm-password"
                // type={showPassword ? "text" : "password"}
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                // onChange={handleChange}
              />
              {true ? (
                <button
                  className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                  //   onClick={ShowPassword}
                >
                  <BsEyeSlashFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                </button>
              ) : (
                <button
                  className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                  //   onClick={ShowPassword}
                >
                  <BsEyeFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                </button>
              )}
            </div>
          </div>
          {loading ? (
            <button disabled className="ForgetPassword__InnerDiv__Form__Button">
              <Progress size={25} />
            </button>
          ) : (
            <button className="ForgetPassword__InnerDiv__Form__Button">
              Reset Password
            </button>
          )}
        </form>
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

        {message && (
          <Alert icon={false} style={{ fontSize: 15 }} severity="success">
            {message}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
