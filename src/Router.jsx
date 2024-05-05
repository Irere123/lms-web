import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
