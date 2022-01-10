import React, { useEffect, useState } from "react";
import { LoginAction } from "../actions/LoginAction";
import { RootStateType } from "../stores";
import { loginStateInterface } from "../reducers/LoginReducer";
import { useDispatch, useSelector } from "react-redux";
import {Progress} from "../components/ReusableComponents/Spinner";
import {REMOVE_ERROR} from "../constants/LoginConstants"

//state type

type LoginState = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  showPassword: boolean;
};

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector<RootStateType>(
    (state) => state.userInfo
  ) as loginStateInterface;

  const [loginForm, setLoginForm] = useState<LoginState>({
    username: "",
    password: "",
    helperText: "",
    isButtonDisabled: true,
    isError: false,
    showPassword: false,
  } as LoginState);

  const { username, password, helperText, isButtonDisabled, isError } =
    loginForm;

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setLoginForm({ ...loginForm, isButtonDisabled: false });
    } else {
      setLoginForm({ ...loginForm, isButtonDisabled: true });
    }
  }, [username, password]);

  const handleLogin: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    dispatch(LoginAction(username, password));

    setTimeout(() => {
      dispatch({type:REMOVE_ERROR})
    }, 4000);
  };

  const handleEvent: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setLoginForm({ ...loginForm, helperText: "Fill all the input Fields" });

    setTimeout(() => {
      setLoginForm({ ...loginForm, helperText: "" });
    }, 3000);

  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  return (
    <div className="Center">
      <form className="Login">
        <div className="Login__Box">
          <div className="Login__Box__Container">
            <div className="Login__Box__InputBox">
              <div className="Login__Box__InputBox__Header">Login</div>
              <div className="Login__Box__InputBox__InputHandler">
                <div className="Login__Box__InputBox__InputHandler__Heading">
                  Username or email address
                </div>
                <input
                  id="username"
                  className="Login__Box__InputBox__InputHandler__Input"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div className="Login__Box__InputBox__InputHandler">
                <div className="Login__Box__InputBox__InputHandler__Heading">
                  Password
                </div>
                <input
                  id="password"
                  className="Login__Box__InputBox__InputHandler__Input"
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="Login__Box__Buttons">
              {isButtonDisabled ? (
                <button
                  className="Login__Box__Buttons__Button"
                  onClick={handleEvent}
                >
                  Login
                </button>
              ) : (
                <button
                  className="Login__Box__Buttons__Button"
                  onClick={handleLogin}
                >
                  {loading ? <Progress size={25}/> : "Login"}
                </button>
              )}
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}

            {helperText ? <div>{helperText}</div> : <></>}
          </div>
        </div>
        <div className="Login__Side"></div>
      </form>
    </div>
  );
};

export default Login;
