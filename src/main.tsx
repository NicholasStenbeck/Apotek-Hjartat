import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrescriptionListView } from "views/PrescriptionListView";
import { PrescriptionView } from "views/PrescriptionView/PrescriptionView";
import { allPrescriptionsLoader } from "loaders/allPrescriptionsLoader";
import { prescriptionLoader } from "loaders/prescriptionLoader";

/**
 * Using the data API, we can decouple data fetching from the view components.
 * Error handling is not included in this example and should be added.
 */
const router = createBrowserRouter([
  {
    path: "/",
    loader: allPrescriptionsLoader,
    element: <PrescriptionListView />,
    children: [
      {
        path: "/prescriptions/:prescriptionId",
        loader: prescriptionLoader,
        element: <PrescriptionView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
