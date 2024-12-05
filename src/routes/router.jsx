import Layout from "../layout/Layout";
import Login from "../auth/Login"
import Register from "../auth/Register";

const routes = [
    {
        path: '/',
        element: <Layout/>
    },
    {
        path: '/signup',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]

export default routes;