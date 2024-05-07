import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfileView from "./pages/Profile/pages/ProfileView/ProfileView";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import Details from "./pages/Details/Details";
import Articles from "./pages/Details/pages/Articles/Articles";
import Photos from "./pages/Details/pages/Photos/Photos";
import { teamsLoader } from "./loaders/teamsLoader";
import { userLoader } from "./loaders/userLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: userLoader,
    children: [
      {
        path: "/",
        loader: teamsLoader,
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileView />,
          },
          {
            path: "data",
            element: <ProfileData />,
          },
        ],
      },
      {
        path: "/details/:id/:username",
        element: <Details />,
        children: [
          {
            index: true,
            element: <Articles />,
          },
          {
            path: "photos",
            element: <Photos />,
          },
        ],
      },
      {
        path: "/details/*",
        element: <Details />,
      },
    ],
  },
]);
