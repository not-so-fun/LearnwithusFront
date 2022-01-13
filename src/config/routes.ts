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
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    exact: true,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    exact: true,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    exact: true,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    exact: true,
  },
  {
    path: "/activate_account",
    name: "Account_Activate",
    component: AccountActivationScreen,
    exact: false,
  },
];

export default routes;
