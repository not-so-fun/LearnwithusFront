import IRoute from '../interfaces/route';
import Login from '../auth/Login';
import Register from '../auth/Register';


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
    }
]

export default routes;