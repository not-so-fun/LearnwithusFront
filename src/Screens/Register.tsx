import React, { useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../stores";
import { Register_Action } from "../actions/RegisterAction";
import { useDispatch, useSelector } from "react-redux";
import { registerInterface } from "../reducers/RegisterReducer";
import { Alert } from "@mui/material";
import { REMOVE_ERROR } from "../constants/RegisterConstants";
import { Progress } from "../components/ReusableUIComponents/Spinner";
//state type

type RegisterState = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isButtonDisabled: boolean;
  isError: boolean;
  showPassword: boolean;
  showPassword2: boolean;
};
type ErrorState = {
  error: boolean;
};

type ErrorMessageState = {
  message: string;
};

const Register: React.FunctionComponent<RouteComponentProps<any>> = () => {
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector<RootStateType>(
    (state) => state.register
  ) as registerInterface;

  //   const [state, dispatch] = useReducer(reducer, initialState);

  // useState for error message
  const [errorMessage, setErrorMessage] = useState<ErrorMessageState | null>(
    null
  );
  // useState for error message
  const [FirstNameError, setFirstNameError] = useState<ErrorState>({
    error: false,
  });
  const [LastNameError, setLastNameError] = useState<ErrorState>({
    error: false,
  });
  const [UserNameError, setUserNameError] = useState<ErrorState>({
    error: false,
  });
  const [EmailError, setEmailError] = useState<ErrorState>({
    error: false,
  });
  const [PasswordError, setPasswordError] = useState<ErrorState>({
    error: false,
  });
  const [ConfirmPasswordError, setConfirmPasswordError] = useState<ErrorState>({
    error: false,
  });
  const [registerForm, setRegisterForm] = useState<RegisterState>({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isButtonDisabled: true,
    isError: false,
    showPassword: false,
    showPassword2: false,
  } as RegisterState);

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
    isButtonDisabled,
    isError,
    showPassword,
    showPassword2,
  } = registerForm;
  useEffect(() => {
    if (
      firstname.trim() &&
      lastname.trim() &&
      username.trim() &&
      password.trim()
    ) {
      setRegisterForm({ ...registerForm, isButtonDisabled: false });
    } else {
      setRegisterForm({ ...registerForm, isButtonDisabled: true });
    }
  }, [firstname, lastname, username, password]);

  useEffect(() => {
    if (firstname.trim() !== "") {
      setFirstNameError({ error: false });
    }
    if (lastname.trim() !== "") {
      setLastNameError({ error: false });
    }
    if (username.trim() !== "") {
      setUserNameError({ error: false });
    }
    if (email.trim() !== "") {
      setEmailError({ error: false });
    }
    if (password.trim() !== "") {
      setPasswordError({ error: false });
    }
    if (confirmPassword.trim() !== "") {
      setConfirmPasswordError({ error: false });
    }
  }, [firstname, lastname, username, email, password, confirmPassword]);

  const handleLogin: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const isEmail = (val: string): boolean | undefined => {
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(val)) {
        return false;
      }
      return true;
    };
    const EmailValidated: boolean | undefined = isEmail(email);
    if (EmailValidated) {
      //dispatch register

      dispatch(Register_Action(email, username, firstname, lastname, password));

      setTimeout(() => {
        dispatch({ type: REMOVE_ERROR });
      }, 4000);
    } else {
      // setRegisterForm({
      //   ...registerForm,
      //   helperText: "Please use a valid email",
      // });
      setErrorMessage({
        message: "Please use a valid email!",
      });
      setTimeout(() => {
        setErrorMessage({
          message: "",
        });
      }, 3000);
    }
  };

  const handleEvent: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (firstname === "") {
      setFirstNameError({ error: true });
    }
    if (lastname === "") {
      setLastNameError({ error: true });
    }
    if (username === "") {
      setUserNameError({ error: true });
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      setEmailError({ error: true });
    }
    if (password === "") {
      setPasswordError({ error: true });
    }
    if (confirmPassword === "") {
      setConfirmPasswordError({ error: true });
    }

    setErrorMessage({
      message: "Please fill all the input fields",
    });
    const Timer = setTimeout(() => {
      setErrorMessage({
        message: "",
      });
    }, 3000);
    // clearTimeout(Timer);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const ShowPassword: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setRegisterForm({ ...registerForm, showPassword: !showPassword });
  };
  const ShowPassword2: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setRegisterForm({ ...registerForm, showPassword2: !showPassword2 });
  };
  return (
    <div className="Center">
      <form className="Auth">
        <div className="Auth__Box">
          <div className="Auth__Box__Container">
            {message && (
              <Alert icon={false} style={{ fontSize: 15 }} severity="success">
                {message}
              </Alert>
            )}

            <div className="Auth__Box__InputBox">
              <div className="Auth__Box__InputBox__Header">Sign Up</div>
              <div className="Auth__Box__InputBox__Name">
                <div className="Auth__Box__InputBox__Name__InputHandler">
                  <div className="Auth__Box__InputBox__Name__InputHandler__Heading">
                    Firstname
                  </div>
                  <input
                    id="firstname"
                    // className="Auth__Box__InputBox__Name__InputHandler__Input "
                    className={
                      FirstNameError.error
                        ? "Auth__Box__InputBox__Name__InputHandler__Input error_input"
                        : "Auth__Box__InputBox__Name__InputHandler__Input"
                    }
                    value={firstname}
                    name="firstname"
                    placeholder="Firstname"
                    onChange={handleChange}
                  />
                </div>
                <div className="Auth__Box__InputBox__Name__InputHandler">
                  <div className="Auth__Box__InputBox__Name__InputHandler__Heading">
                    Lastname
                  </div>
                  <input
                    id="lastname"
                    className={
                      LastNameError.error
                        ? "Auth__Box__InputBox__Name__InputHandler__Input error_input"
                        : "Auth__Box__InputBox__Name__InputHandler__Input"
                    }
                    value={lastname}
                    name="lastname"
                    placeholder="Lastname"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="Auth__Box__InputBox__InputHandler">
                <div className="Auth__Box__InputBox__InputHandler__Heading">
                  Username
                </div>
                <input
                  id="username"
                  className={
                    UserNameError.error
                      ? "Auth__Box__InputBox__InputHandler__Input error_input"
                      : "Auth__Box__InputBox__InputHandler__Input"
                  }
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div className="Auth__Box__InputBox__InputHandler">
                <div className="Auth__Box__InputBox__InputHandler__Heading">
                  Email
                </div>
                <input
                  id="email"
                  className={
                    EmailError.error
                      ? "Auth__Box__InputBox__InputHandler__Input error_input"
                      : "Auth__Box__InputBox__InputHandler__Input"
                  }
                  value={email}
                  name="email"
                  placeholder="Please enter a valid email"
                  onChange={handleChange}
                />
              </div>
              <div className="Auth__Box__InputBox__InputHandler">
                <div className="Auth__Box__InputBox__InputHandler__Heading">
                  Password
                </div>
                <div className="Auth__Box__InputBox__InputHandler__InputBox">
                  <input
                    id="password"
                    className={
                      PasswordError.error
                        ? "Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password error_input"
                        : "Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                    }
                    name="password"
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <button
                      className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                      onClick={ShowPassword}
                    >
                      <BsEyeSlashFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                    </button>
                  ) : (
                    <button
                      className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                      onClick={ShowPassword}
                    >
                      <BsEyeFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                    </button>
                  )}
                </div>
              </div>
              <div className="Auth__Box__InputBox__InputHandler">
                <div className="Auth__Box__InputBox__InputHandler__Heading">
                  Confirm Password
                </div>
                <div className="Auth__Box__InputBox__InputHandler__InputBox">
                  <input
                    id="confirmPassword"
                    className={
                      ConfirmPasswordError.error
                        ? "Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password error_input"
                        : "Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                    }
                    name="confirmPassword"
                    value={confirmPassword}
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                  {showPassword2 ? (
                    <button
                      className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                      onClick={ShowPassword2}
                    >
                      <BsEyeSlashFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                    </button>
                  ) : (
                    <button
                      className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
                      onClick={ShowPassword2}
                    >
                      <BsEyeFill className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="Auth__Box__Buttons">
              {isButtonDisabled ? (
                <button
                  className="Auth__Box__Buttons__Button"
                  onClick={handleEvent}
                >
                  Register
                </button>
              ) : (
                <button
                  className="Auth__Box__Buttons__Button"
                  onClick={handleLogin}
                >
                  {loading ? <Progress size={25} /> : "Register"}
                </button>
              )}
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {errorMessage?.message ? <div>{errorMessage.message}</div> : <></>}
            <div className="Auth__Box__Register">
              Already got an account?
              <Link className="Auth__Box__Register__Redirect" to="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="Auth__Side"></div>
      </form>
    </div>
  );
};

export default withRouter(Register);
