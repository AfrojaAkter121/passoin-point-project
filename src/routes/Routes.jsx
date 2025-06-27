import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layout/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Authentication from "../Pages/Authentication";
import MyGroups from "../Pages/MyGroups";
import CreateGroup from "../Pages/CreateGroup";
import AllGroups from "../Pages/AllGroups";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import GroupDetails from "../Pages/GroupDetails";
import UpdateGroup from "../Pages/UpdateGroup";
import ErrorPage from "../Pages/ErrorPage";
import DashBoard from "../Dashboard/DashBoard";
import DashboardOverview from "../Dashboard/DashboardOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayout,
    children: [
      {
        path: "/",
        loader: () => fetch("https://passion-point-server.vercel.app/groups"),
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashBoard,
    children: [
      {
        index: true,
        Component: () => <Navigate to="/dashboard/overview" replace />,
      },
      {
        path: "overview",
        Component: DashboardOverview,
      },
      {
        path: "myGroups",
        Component: () => (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
      {
        path: "createGroup",
        Component: () => (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "allGroups",
        Component: () => (
          <PrivateRoute>
            <AllGroups />
          </PrivateRoute>
        ),
      },
      {
        path: "groups/:id",
        loader: ({ params }) =>
          fetch(`https://passion-point-server.vercel.app/groups/${params.id}`),
        Component: () => (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(
            `https://passion-point-server.vercel.app/updateGroup/${params.id}`
          ),
        Component: () => (
          <PrivateRoute>
            <UpdateGroup></UpdateGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: Authentication,
    children: [
      {
        path: "/auth/signup",
        Component: Register,
      },
      {
        path: "/auth/signin",
        Component: Login,
      },
    ],
  },
]);
