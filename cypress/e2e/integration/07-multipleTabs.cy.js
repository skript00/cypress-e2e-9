describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("Multiple Windows");
  });

  it("iFrame", () => {
    cy.get("#microsoft").should("have.attr", "target", "_blank");

    cy.get("#microsoft").invoke("removeAttr", "target").click();

    cy.url().should("contains", "microsoft");
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Navigate back to main page
   * Validate title contains "techglobal"
   */
});