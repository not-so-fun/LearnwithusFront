import IRoute from "../interfaces/route";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../Layout/Profile";
import ForgotPassword from "../components/ResetPassword/ForgotPassword";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import AccountActivationScreen from "../Screens/AccountActivationScreen";

const routes: IRoute[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    exact: true,
    private:false
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    exact: true,
    private:false
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    exact: true,
    private:true
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    exact: true,
    private:false
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    exact: true,
    private:false
  },
  {
    path: "/activate_account",
    name: "Account_Activate",
    component: AccountActivationScreen,
    exact: false,
    private:false
  },
];

export default routes;
