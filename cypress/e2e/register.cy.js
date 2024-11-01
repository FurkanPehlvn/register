import { errorMessages } from "../../src/components/Register";
describe("Register Page", () => {
  describe("Error Messages", () => {
    it("Name input throws error for 2 chars", () => {
      cy.visit("http://localhost:5173/");

      cy.get("[data-cy=ad-input]").type("em");
      cy.contains(errorMessages.ad);
    });
    it("Surname input throws error for 2 chars", () => {
      cy.visit("http://localhost:5173/");

      cy.get("[data-cy=soyad-input]").type("em");
      cy.contains(errorMessages.soyad);
    });
    it("Email input throws error for emre@wit", () => {
      cy.visit("http://localhost:5173/");

      cy.get("[data-cy=email-input]").type("emre@wit.");
      cy.contains(errorMessages.email);
    });
    it("Password input throws error for 1234", () => {
      cy.visit("http://localhost:5173/");

      cy.get("[data-cy=password-input]").type("1234");
      cy.contains(errorMessages.password);
    });

    it("Button is disabled for unvalidated input", () => {
      cy.visit("http://localhost:5173/");
      cy.get("[data-cy=password-input]").type("1234");
      cy.get("[data-cy=submit-button]").should("be.disabled");
    });
  });

  describe("Form inputs validated", () => {
    it("button enabled for validated inputs", () => {
      cy.visit("http://localhost:5173/");

      cy.get("[data-cy=ad-input]").type("qweqwe");
      cy.get("[data-cy=soyad-input]").type("qweewq");
      cy.get("[data-cy=email-input]").type("qwe@wit.com");
      cy.get("[data-cy=password-input]").type("123456789");
      cy.get("[data-cy=submit-button]").should("not.be.disabled");
    });
  });
});
