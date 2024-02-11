import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Serveys from "./components/Serveys";


const router = createBrowserRouter([

{
    path:'/',
    element: <LoginForm/>
},
{
    path:'/signup',
    element: <SignUp/>
},
{
    path:'/dashboard',
    element: <Dashboard/>
},
{
    path:'/servey',
    element: <Serveys/>
},

])

export default router;