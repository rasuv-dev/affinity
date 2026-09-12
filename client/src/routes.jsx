import React from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default routes;
