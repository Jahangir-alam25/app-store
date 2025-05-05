import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";


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
             element: <h2>Register</h2>
          }
      ]
  },
  ]);


  export default router;