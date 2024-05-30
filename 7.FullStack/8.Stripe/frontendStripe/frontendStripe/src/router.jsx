import App from "./App";
import Cart from "./components/Cart";
import Content from "./components/Content";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
