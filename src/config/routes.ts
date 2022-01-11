import IRoute from '../interfaces/route';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Profile from '../Layout/Profile';


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
        path:'/profile',
        name:'Profile',
        component: Profile,
        exact: true
    }
]

export default routes;