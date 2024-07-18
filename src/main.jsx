import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/home";
import Portfolio from "./routes/portfolio";
import Services from "./routes/services";
import NotFound from "./routes/NotFound";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "", element: <Home /> },
      { path: "*", element: <NotFound /> }, // Catch-all for 404 within the outlet
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
