import prescriptions from "assets/prescriptions.json";

export type Prescription = (typeof prescriptions)[number];
