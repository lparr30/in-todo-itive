import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import WeekView from "./pages/WeekView/WeekView";
import DayView from "./pages/DayView/DayView";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // index: true,
        // element:
      }, {
        path: '/weekview',
        element: <WeekView />
      }, {
        path: '/dayview',
        element: <DayView />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);