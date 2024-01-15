import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrescriptionsView } from "views/PrescriptionsView";
import { allPrescriptionsLoader } from "loaders/allPrescriptionsLoader";
import { Prescription } from "components/Prescription";
import { prescriptionLoader } from "loaders/prescriptionLoader";

/**
 * Using the data API, we can decouple data fetching from the view components.
 * Error handling is not included in this example and should be added.
 */
const router = createBrowserRouter([
  {
    path: "/",
    loader: allPrescriptionsLoader,
    element: <PrescriptionsView />,
    children: [
      {
        path: "/prescriptions/:prescriptionId",
        loader: prescriptionLoader,
        element: <Prescription />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
