import IRoute from "../interfaces/route";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import ForgotPassword from "../components/ResetPassword/ForgotPassword";
import Home from "../Screens/Home";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import AccountActivationScreen from "../Screens/AccountActivationScreen";
import AskQuestion from "../Screens/AskQuestions";
import MainQA from "../Screens/MainQA";
import Answered from "../Screens/Answered";
import SavedQuestion from "../Screens/SavedQuestion";
import UpdateQuestions from "../Screens/UpdateQuestions";
import SearchTutors from "../components/SearchTutors/SearchTutors";
import MessagesChatroom from "../Screens/MessagesChatroom";
import Messages from "../Screens/Messages";
import Profile from "../Screens/Profile";
const routes: IRoute[] = [
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
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/question/ask",
    name: "questions",
    component: AskQuestion,
    exact: true,
    private: true,
    showNav: false,
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
    path: "/saved-questions",
    name: "saved-question",
    component: SavedQuestion,
    exact: true,
    private: true,
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
    path: "/messages/:messageId",
    name: "Message",
    component: MessagesChatroom,
    exact: false,
    private: true,
    showNav: true,
  },
  {
    path: "/messages",
    name: "Message",
    component: Messages,
    exact: false,
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
    path: "/searchTutors",
    name: "Search Tutors",
    component: SearchTutors,
    exact: true,
    private: true,
    showNav: false,
  },
];

export default routes;
