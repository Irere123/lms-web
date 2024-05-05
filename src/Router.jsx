import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
