import { PrescriptionsList } from "components/PrescriptionsList";
import { Outlet, useLoaderData } from "react-router-dom";
import { Prescription } from "types";
import classes from "./PrescriptionsView.module.css";

export const PrescriptionsView = () => {
  const prescriptions = useLoaderData() as Prescription[];
  return (
    <div className={classes.Wrapper}>
      <PrescriptionsList prescriptions={prescriptions} />
      <Outlet />
    </div>
  );
};
