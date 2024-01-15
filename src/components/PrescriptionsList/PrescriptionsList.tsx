import type { Prescription as PrescriptionBaseType } from "types";
import classes from "./PrescriptionsList.module.css";
import { Link, useLocation } from "react-router-dom";

/**
 * Define a type with only the needed properties.
 * This makes mocking easier in tests.
 */

type Prescription = Pick<PrescriptionBaseType, "prescriptionId" | "article">;

type PrescriptionsListProps = {
  prescriptions: Prescription[];
};

export const PrescriptionsList = ({
  prescriptions,
}: PrescriptionsListProps) => {
  const location = useLocation();

  const getListItemClassNames = (prescription: Prescription) => {
    let classNames = classes.ListItem;

    if (!prescription.article.stock) {
      classNames += ` ${classes.OutOfStock}`;
    }

    if (location.pathname.endsWith(`${prescription.prescriptionId}`)) {
      classNames += ` ${classes.Active}`;
    }

    return classNames;
  };

  return (
    <nav className={classes.Wrapper}>
      <h1 className={classes.Title}>Recept</h1>
      <ul className={classes.List}>
        {prescriptions.map((prescription) => (
          <li
            key={prescription.prescriptionId}
            className={getListItemClassNames(prescription)}
          >
            <Link to={`/prescriptions/${prescription.prescriptionId}`}>
              <h2>{prescription.article.productName}</h2>
              <p>{prescription.article.preamble}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
