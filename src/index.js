import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeekView from "./pages/WeekView";
import DayView from "./pages/DayView";
import Notes from "./pages/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <WeekView />,
      },
      {
        path: "/dayview",
        element: <DayView />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
