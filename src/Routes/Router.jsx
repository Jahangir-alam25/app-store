import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
    {
      path : "/auth",
      Component : AuthLayout,
      children:[
          {
              path: "/auth/login",
              Component: Login
          },
          {
              path:"/auth/register",
             Component: Register
          }
      ]
  },
  ]);


  export default router;