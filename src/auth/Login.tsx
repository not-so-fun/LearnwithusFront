import React, { useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

//state type

type LoginState = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  showPassword: boolean;
};

const Login: React.FunctionComponent<RouteComponentProps<any>> = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [loginForm, setLoginForm] = useState<LoginState>({
    username: "",
    password: "",
    helperText: "",
    isButtonDisabled: true,
    isError: false,
    showPassword: false,
  } as LoginState);

  const { username, password, helperText, isButtonDisabled, isError, showPassword } =
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
  const ShowPassword: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setLoginForm({...loginForm, showPassword:!showPassword});
  };
  return (
    <div className="Center">
      <form className="Auth">
        <div className="Auth__Box">
          <div className="Auth__Box__Container">
          
          <div className="Auth__Box__InputBox">
          <div className="Auth__Box__InputBox__Header">
            Login
          </div>
            <div className="Auth__Box__InputBox__InputHandler">
              <div className="Auth__Box__InputBox__InputHandler__Heading">
                Username or email address
              </div>
              <input
                id="username"
                className="Auth__Box__InputBox__InputHandler__Input"
                value={username}
                name="username"
                placeholder="Username"
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
                className="Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                name="password"
                value={password}
                type={showPassword? "text" :"password"}
                placeholder="Password"
                onChange={handleChange}
              />
              {showPassword ? 
              <button 
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos" onClick={ShowPassword}>
              <BsEyeSlashFill 
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo"/>
              </button> : 
              <button
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
              onClick={ShowPassword}
              >
              <BsEyeFill 
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo"
              />
              </button>
              }
              </div>
            </div>
          </div>
          <div className="Auth__Box__Buttons">
            {isButtonDisabled ? (
              <button
                className="Auth__Box__Buttons__Button"
                onClick={handleEvent}
              >
                Login
              </button>
            ) : (
              <button
                className="Auth__Box__Buttons__Button"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
            
            </div>
            {helperText ? <div>{helperText}</div> : <></>}
            <div className="Auth__Box__ForgotPassword">
              forgot password?
            </div>
            <div className="Auth__Box__Register">
              Haven't got an account?
               <Link className="Auth__Box__Register__Redirect" to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="Auth__Side">

        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
