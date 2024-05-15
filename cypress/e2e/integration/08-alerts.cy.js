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

  /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   */

  it('Handling the Confirmation Alert', () => {
    cy.on('window:confirm', (str) => {
      expect(str).equal('Would you like to stay on TechGlobal Training application?')
      return false
    })

    cy.get('#confirmation_alert').click()
    cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')
  })

  it(('Handling Prompt Alert'), () => {

    cy.get('#prompt_alert')
  })

});







/*
  put this when you get the error after cy.log()

  cy.on('uncaught:exception', () => {
    return false
  })
*/