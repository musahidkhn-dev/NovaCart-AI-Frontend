import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import NotFound from "../Pages/NotFound";

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
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;