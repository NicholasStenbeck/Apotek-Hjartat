import { getAllPrescriptions } from "utils/getAllPrescriptions.utils";

export const allPrescriptionsLoader = async () => {
  return getAllPrescriptions();
};
