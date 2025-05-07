import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AppDetails from "../Pages/AppDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";
import Loading from "../Pages/Loading";
import MyProfile from "../Components/MyProfile";


const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/apps.json"),
          HydrateFallback: () => <Loading></Loading>,
        },
        {
          path: "/category/:id",
          element: (
            <PrivateRoute>
              <AppDetails></AppDetails>
            </PrivateRoute>
          ),
          loader: () => fetch("/apps.json"),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
             <MyProfile></MyProfile>
            </PrivateRoute>
          ),
          loader: () => fetch("/apps.json"),
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
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  }
  ]);


  export default router;