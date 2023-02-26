import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Checkout from '../../Pages/Checkout/Checkout'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login/Login'
import SignUp from '../../Pages/Login/SignUp/SignUp'
import Orders from '../../Pages/Orders/Orders'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Checkout /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ishrafil-car-service-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders />
            }
        ]
    }
])