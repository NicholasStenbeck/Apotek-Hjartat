import { useLoaderData } from "react-router-dom";
import type { Prescription as PrescriptionType } from "types";
import { Prescription } from "./Prescription";

/**
 * Use wrapper components to separate logic from presentation.
 * This makes it easier to test the presentation components.
 */

export const PrescriptionWrapper = () => {
  const prescription = useLoaderData() as PrescriptionType;
  return <Prescription prescription={prescription} />;
};
