import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Serveys from "./components/Serveys";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";


const router = createBrowserRouter([

{
    path:'/',
    element: <DefaultLayout/>,
    children:[

        {
            path:'/',
            element: <Dashboard/>
        },
        {
            path:'/survey',
            element: <Serveys/>
        },
        

    ]
},

{
    path:'/',
    element: <GuestLayout/>,
    children:[

        {
            path:'/login',
            element: <LoginForm/>
        },
        {
            path:'/signup',
            element: <SignUp/>
        },

    ]
},

])

export default router;