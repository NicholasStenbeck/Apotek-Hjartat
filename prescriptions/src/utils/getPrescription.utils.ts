import prescriptions from "assets/prescriptions.json";
import type { Prescription } from "types";

/**
 * My utils pretends to be a real API, so I'm using setTimeout to simulate a
 * network request.
 */

export const getPrescription = async (
  id: Prescription["prescriptionId"]
): Promise<Prescription | undefined> => {
  const prescription = prescriptions.find(
    (prescription) => prescription.prescriptionId === id
  );

  return new Promise((resolve) => setTimeout(() => resolve(prescription), 100));
};
