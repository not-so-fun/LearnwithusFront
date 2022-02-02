import IRoute from "../interfaces/route";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../Layout/Profile";
import ForgotPassword from "../components/ResetPassword/ForgotPassword";
import HomePage from "../Layout/HomePage";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import AccountActivationScreen from "../Screens/AccountActivationScreen";
import AskQuestion from "../Layout/AskQuestions";
import MainQA from "../Layout/MainQA";
import Answered from "../Layout/Answered";
import SavedQuestion from "../components/SavedQuestions/SavedQuestion";
import UpdateQuestions from "../Layout/UpdateQuestions";
const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    exact: true,
    private: true,
    showNav: true,
  },
  {
    path: "/updateQuestion/:question_id",
    name: "Update Question",
    component: UpdateQuestions,
    exact: true,
    private: true,
    showNav: true,
  },
  {
    path: "/asked",
    name: "Answered",
    component: Answered,
    exact: true,
    private: true,
    showNav: true,
  },
  {
    path: "/questions/:id",
    name: "MainQuestionAnswer",
    component: MainQA,
    exact: false,
    private: true,
    showNav: false,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    exact: true,
    private: false,
    showNav: false,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    exact: true,
    private: false,
    showNav: false,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    exact: true,
    private: true,
    showNav: true,
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    exact: true,
    private: false,
    showNav: false,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    exact: true,
    private: false,
    showNav: false,
  },
  {
    path: "/activate_account",
    name: "Account_Activate",
    component: AccountActivationScreen,
    exact: true,
    private: false,
    showNav: false,
  },

  {
    path: "/question/ask",
    name: "questions",
    component: AskQuestion,
    exact: true,
    private: true,
    showNav: false,
  },
  {
    path: "/saved-questions",
    name: "saved-question",
    component: SavedQuestion,
    exact: true,
    private: true,
    showNav: false,
  },
];

export default routes;
