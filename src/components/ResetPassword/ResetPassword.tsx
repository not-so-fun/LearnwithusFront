import React, { FC, useEffect } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const ResetPassword: FC = () => {
  return (
    <div className="ForgetPassword">
      <div className="ForgetPassword__InnerDiv">
        <h1 className="ForgetPassword__InnerDiv__Heading">
          Create new password
        </h1>
        <p className="ForgetPassword__InnerDiv__text">
          Your new password must be different from previously used passwords.
        </p>
        <form>
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
          <button className="ForgetPassword__InnerDiv__Form__Button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
