import IRoute from '../interfaces/route';
import Login from '../auth/Login';
import Register from '../auth/Register';
import AccountActivationScreen from '../Screens/AccountActivationScreen';


const routes: IRoute[] = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        exact: true
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        exact: true
    },
    {
        path:'/activate_account',
        name:"Account_Activate",
        component:AccountActivationScreen,
        exact:false
    }
]

export default routes;