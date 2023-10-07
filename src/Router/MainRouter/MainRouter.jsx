import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../RootElement/RootElement";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const MainRouter = createBrowserRouter([{
    path: '/',
    element: <RootElement></RootElement>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <PrivateRouter><About></About></PrivateRouter>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}])

export default MainRouter;