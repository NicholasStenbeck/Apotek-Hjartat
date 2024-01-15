import classes from "./Prescription.module.css";
import type { Prescription as PrescriptionType } from "types";

type PrescriptionProps = {
  prescription: Pick<PrescriptionType, "prescriber" | "article">;
};

/**
 * Include semantic HTML for better accessibility.
 */

export const Prescription = ({ prescription }: PrescriptionProps) => {
  return (
    <article>
      <h1 className={classes.Title}>{prescription.article.productName}</h1>
      <h2>Förskrivare</h2>
      <section className={classes.PrescriberInfo}>
        <p>
          <b>Namn:</b> {prescription.prescriber.name}
        </p>
        <p>
          <b>Telefonnummer:</b> {prescription.prescriber.phoneNumber}
        </p>
        <p>
          <b>Yrke:</b> {prescription.prescriber.profession}
        </p>
        <p>
          <b>Arbetsplats:</b> {prescription.prescriber.workplace}
        </p>
      </section>
    </article>
  );
};
