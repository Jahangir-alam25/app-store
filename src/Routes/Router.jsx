import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AppDetails from "../Pages/AppDetails";


const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/apps.json"),
        },
        {
          path: "/category/:id",
         Component: AppDetails,
          loader: () => fetch("/apps.json"),
        }
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