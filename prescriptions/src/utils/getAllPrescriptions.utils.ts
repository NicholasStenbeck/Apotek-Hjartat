import prescriptions from "assets/prescriptions.json";
import type { Prescription } from "types";

/**
 * My utils pretends to be a real API, so I'm using setTimeout to simulate a
 * network request.
 */

export const getAllPrescriptions = async (): Promise<Prescription[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(prescriptions), 100)
  );
};
