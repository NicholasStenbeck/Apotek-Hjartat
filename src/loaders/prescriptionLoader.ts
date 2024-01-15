import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { getPrescription } from "utils/getPrescription.utils";

type PrescriptionLoaderParams = LoaderFunctionArgs<{ prescriptionId: string }>;

export const prescriptionLoader: LoaderFunction<
  PrescriptionLoaderParams
> = async ({ params: { prescriptionId } }) => {
  const id = Number(prescriptionId);

  // Use guard clauses to return early if the id is not a number.
  if (isNaN(id)) {
    return null;
  }
  return getPrescription(id);
};
