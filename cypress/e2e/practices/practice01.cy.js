/// <reference types="cypress"/>

describe("Practice01 - Validate Google", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });

  it("TASK-1: Validate the title & URL", () => {
    cy.title().should("eq", "Google");
    cy.url().should("eq", "https://www.google.com/");
  });

  it("TASK-2: Validate Logo Presence", () => {
    cy.get(".lnXdpd").should("be.visible");
  });
  it("TASK-3: Validate Google Search", () => {
    cy.get("#APjFqb").type("Cypress{Enter}");
    cy.get('.LC20lb').first().should('be.visible');
  });

  it("TASK-4: Validate # of auto-complete suggestions", () => {
    cy.get("#APjFqb").type("Artificial Intelligence");
    cy.get('[jsname="bw4e9b"] > li').should("have.length.greaterThan", 0);
    cy.get('[jsname="bw4e9b"] > li').first().click();
    cy.url().should('include', 'q=artificial+intelligence');
  });
});
