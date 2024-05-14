describe("Handling Alerts", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("Alerts");
  });

  it("Handling the Warning Alert", () => {
    
    cy.on("window:alert", (str) => {
      console.log(`My warning alert text content is: ${str}`);
      expect(str).equal("You are on TechGlobal Training application.");
    });

    cy.get("#warning_alert").click();
  });
});

    // put this when you get the error after cy.log()
    // cy.on('uncaught:exception', () => {
    //   return false
    // })