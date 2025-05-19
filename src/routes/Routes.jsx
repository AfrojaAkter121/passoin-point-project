import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../layout/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
    },
    {
        path: 'signup',
        Component: Register,
    },
    {
    path: '/signin',
    Component : Login,
    }
  ]);