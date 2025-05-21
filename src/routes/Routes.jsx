import { createBrowserRouter } from "react-router";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: '/myGroups',
        element: <PrivateRoute>
          <MyGroups />
          </PrivateRoute>,
      },
      {
        path:''
      },
      {
        path: '/createGroup',
        element: <PrivateRoute>
          <CreateGroup/>
        </PrivateRoute>
      },
      {
        path: '/allGroups',
        loader: () => fetch('http://localhost:4000/groups'),
        element: <PrivateRoute>
          <AllGroups />
          </PrivateRoute>,
      },
      {
        path: '/groups/:id',
        loader: ({params}) => fetch(`http://localhost:4000/groups/${params.id}`),
        element: <PrivateRoute>
          <GroupDetails />
          </PrivateRoute>,
      },
      {
        path: '/updateGroup/:id',
        loader: ({params}) => fetch(`http://localhost:4000/updateGroup/${params.id}`),
        element: <PrivateRoute>
          <UpdateGroup></UpdateGroup>
        </PrivateRoute>
      }
    ]
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
