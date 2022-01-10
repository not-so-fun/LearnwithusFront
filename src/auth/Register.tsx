import React, { useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

//state type

type RegisterState = {
  firstname:string,
  lastname:string,
  username: string;
  email:string,
  password: string;
  confirmPassword:string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  showPassword: boolean;
  showPassword2: boolean;
};

const Register: React.FunctionComponent<RouteComponentProps<any>> = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [registerForm, setRegisterForm] = useState<RegisterState>({
    firstname:"",
    lastname:"",
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
    helperText: "",
    isButtonDisabled: true,
    isError: false,
    showPassword: false,
    showPassword2: false
  } as RegisterState);

  const {firstname,lastname, username,email, password, confirmPassword,helperText, isButtonDisabled, isError, showPassword, showPassword2 } =
    registerForm;
  useEffect(() => {
    if (firstname.trim()&& lastname.trim() && username.trim() && password.trim()) {
      setRegisterForm({ ...registerForm, isButtonDisabled: false });
    } else {
      setRegisterForm({ ...registerForm, isButtonDisabled: true });
    }
  }, [firstname, lastname,username, password]);
  

  const handleLogin: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const isEmail  = (val: string) : boolean | undefined=>{
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(val)){
          return false;
        }
        return true;
    }
    const EmailValidated: boolean | undefined = isEmail(email);
    if(EmailValidated){
        //dispatch register
    } else{
        setRegisterForm({ ...registerForm, helperText: "Please use a valid email" });
        setTimeout(() => {
            setRegisterForm({ ...registerForm, helperText: "" });
        }, 3000);
    }
  };

  const handleEvent: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setRegisterForm({ ...registerForm, helperText: "Fill all the input Fields" });
    setTimeout(() => {
      setRegisterForm({ ...registerForm, helperText: "" });
    }, 3000);
  };
  

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
  };
  const ShowPassword: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setRegisterForm({...registerForm, showPassword:!showPassword});
  };
  const ShowPassword2: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setRegisterForm({...registerForm, showPassword2:!showPassword2});
  };
  return (
    <div className="Center">
      <form className="Auth">
        <div className="Auth__Box">
          <div className="Auth__Box__Container">
          
          <div className="Auth__Box__InputBox">
          <div className="Auth__Box__InputBox__Header">
            Sign Up
          </div>
          <div 
          className="Auth__Box__InputBox__Name"
          >
            <div className="Auth__Box__InputBox__Name__InputHandler">
              <div className="Auth__Box__InputBox__Name__InputHandler__Heading">
                firstname
              </div>
              <input
                id="firstname"
                className="Auth__Box__InputBox__Name__InputHandler__Input"
                value={firstname}
                name="firstname"
                placeholder="Firstname"
                onChange={handleChange}
              />
            </div>
            <div className="Auth__Box__InputBox__Name__InputHandler">
              <div className="Auth__Box__InputBox__Name__InputHandler__Heading">
                lastname
              </div>
              <input
                id="lastname"
                className="Auth__Box__InputBox__Name__InputHandler__Input"
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
                className="Auth__Box__InputBox__InputHandler__Input"
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
                className="Auth__Box__InputBox__InputHandler__Input"
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
            <div className="Auth__Box__InputBox__InputHandler">
            <div className="Auth__Box__InputBox__InputHandler__Heading">
                Confirm Password
              </div>
              <div className="Auth__Box__InputBox__InputHandler__InputBox">
              <input
                id="confirmPassword"
                className="Auth__Box__InputBox__InputHandler__InputBox__Input Auth__Box__InputBox__InputHandler__InputBox__Input__Password"
                name="confirmPassword"
                value={confirmPassword}
                type={ showPassword2 ? "text" :"password"}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              { showPassword2 ? 
              <button 
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos" onClick={ShowPassword2}>
              <BsEyeSlashFill 
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos__Logo"/>
              </button> : 
              <button
              className="Auth__Box__InputBox__InputHandler__InputBox__Logos"
              onClick={ShowPassword2}
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
                Register
              </button>
            ) : (
              <button
                className="Auth__Box__Buttons__Button"
                onClick={handleLogin}
              >
                Register
              </button>
            )}
            
            </div>
            {helperText ? <div>{helperText}</div> : <></>}
            <div className="Auth__Box__Register">
              Already got an account?
               <Link className="Auth__Box__Register__Redirect" to="/login">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="Auth__Side">
          
        </div>
      </form>
    </div>
  );
};

export default withRouter(Register);