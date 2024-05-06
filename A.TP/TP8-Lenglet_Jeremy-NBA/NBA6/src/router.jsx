import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Team from "./pages/Teams/Team";
import Favorites from "./pages/Favorites/Favorites";
import Users from "./pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Team />,
        children: [
          {
            path: ":conference",
            element: <Team />,
          },
        ],
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
