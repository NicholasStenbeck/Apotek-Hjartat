import { useLoaderData } from "react-router-dom";
import type { Prescription as PrescriptionType } from "types";
import { Prescription } from "components/Prescription";

/**
 * Use view components as wrappers to separate logic from presentation.
 * This makes it easier to test the presentation components.
 */

export const PrescriptionView = () => {
  const prescription = useLoaderData() as PrescriptionType;
  return <Prescription prescription={prescription} />;
};
