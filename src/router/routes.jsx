/* this file is ignored in .prettierIgnore */
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { Login, Home, Register, Shop } from "../pages";

const isLoggedIn = localStorage.getItem("token");
const isAdmin = false
const router = createBrowserRouter([
    {
        path: "/",
        element: isLoggedIn ? <Outlet /> :  <Outlet />,
        children: [
            { path: "/shop", element: <Shop /> },
            { path: "/", element: <Home /> },
            { 
                path: "/", 
                element: isAdmin ? <Outlet /> : <Navigate to={'login'} />,
                children:[
                    { path: "/admin", element: <Register /> },
        ],
            },
        ],
    },
    { 
        path: "/", 
        element: !isLoggedIn ? <Outlet /> : <Outlet />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]);

export default router;
