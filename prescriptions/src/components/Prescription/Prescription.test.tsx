import { render, screen } from "@testing-library/react";
import { Prescription } from "./Prescription";

/**
 * This file shows an example of how to test a component.
 */

const mockPrescription = {
  prescriber: {
    name: "Lars Läkarsson",
    workplace: "Test",
    profession: "Läkare",
    phoneNumber: "082211555",
  },
  article: {
    id: "60450",
    productName: "Xolair®",
    productLongName: "Xolair, inj-vätska, lösning 150 mg Orifarm AB",
    pharmaceuticalForm: "Injektionsvätska, lösning",
    packagingText: "Förfylld spruta, 1 x 1 ml (PD: Orifarm AB)",
    strength: "150 mg",
    description: null,
    canBePurchased: true,
    stock: 0,
    stockStatus: "OutOfStock",
    originalUnitPrice: 3691.73,
    cheapestReplacement: null,
    articleLink:
      "https://www.fass.se/LIF/product?userType=2&nplId=20080312000022",
    activeSubstance: "Omalizumab",
    extraCost: 0.0,
    numericalNumber: 1.0,
    isNarcotic: false,
    articleInfoText: null,
    articleNumber: "057245",
    header: "Xolair®",
    preamble:
      "Omalizumab, Injektionsvätska, lösning, 150 mg, Förfylld spruta, 1 x 1 ml (PD: Orifarm AB)",
    purchaseStatus: { text: null, code: null, level: "None" },
    articleStatus: { text: null, code: null, level: "None" },
    nplpackid: "20120106100016",
  },
};

/**
 * Test by behavior, not implementation.
 * In this case, the expected behavior is that the component shows
 * the name, phone number, profession and workplace of the prescriber,
 * as well as the name of the product.
 */

describe("Prescription", () => {
  it("should render", () => {
    render(<Prescription prescription={mockPrescription} />);
    expect(
      screen.getByText(mockPrescription.article.productName)
    ).toBeDefined();
    expect(screen.getByText(mockPrescription.prescriber.name)).toBeDefined();
    expect(
      screen.getByText(mockPrescription.prescriber.phoneNumber)
    ).toBeDefined();
    expect(
      screen.getByText(mockPrescription.prescriber.profession)
    ).toBeDefined();
    expect(
      screen.getByText(mockPrescription.prescriber.workplace)
    ).toBeDefined();
  });
});
