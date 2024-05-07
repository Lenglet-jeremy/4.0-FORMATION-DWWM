import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfileView from "./pages/Profile/pages/ProfileView/ProfileView";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import Articles from "./pages/Details/pages/Articles/Articles";
import Photos from "./pages/Details/pages/Photos/Photos";
import { userLoader } from "./loaders/userLoader";
import { profileLoader } from "./loaders/profileLoader";
import { lazy } from "react";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Details = lazy(() => import("./pages/Details/Details"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: userLoader,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: profileLoader,
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
