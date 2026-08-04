import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Login";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

import PublicLayout from "./layouts/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <login />,
      },
      {
        path: "register",
        element: <register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;