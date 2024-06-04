import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import Logout from "./components/Logout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <UserConnected>
            <Homepage />
          </UserConnected>
        ),
      },
      {
        path: "/login",
        element: (
          <UserNotConnected>
            <Login />
          </UserNotConnected>
        ),
      },
      {
        path: "/register",
        element: (
          <UserNotConnected>
            <Register />
          </UserNotConnected>
        ),
      },
      {
        path: "/logout",
        element: (
          <UserConnected>
            <Logout />
          </UserConnected>
        ),
      },
    ],
  },
]);
