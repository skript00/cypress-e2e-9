/// <reference types="cypress"/>

describe("Practice02 - Validate Amazon", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });

  it("TASK-1: Validate Amazon Header", () => {

    const locators = ['#nav-logo-sprites', '#glow-ingress-block', '#nav-search-dropdown-card',
     '#twotabsearchtextbox', '#nav-search-submit-button', '#icp-nav-flyout', '#nav-link-accountList', '#nav-orders']

     for (const locator of locators) {

      cy.get(locator).then(($el) => {
        cy.wrap($el).should('be.visible')
       })
     }
        // cy.get('#nav-logo-sprites').should('be.visible');
        // cy.get('#glow-ingress-block').should('be.visible');
        // cy.get('#nav-search-dropdown-card').should('be.visible');
        // cy.get('#twotabsearchtextbox').should('be.visible');
        // cy.get('#nav-search-submit-button').should('be.visible');
        // cy.get('#icp-nav-flyout').should('be.visible');
        // cy.get('#nav-link-accountList').should('be.visible');
        // cy.get('#nav-orders').should('be.visible');
        cy.get('#nav-cart-count').should('be.visible').and('have.text', '0')
  });

  it("TASK-2: Validate the Amazon Location Update", () => {
    cy.get('#glow-ingress-block').click()
    cy.get('#GLUXZipUpdateInput').type('60018{enter}')
    cy.get('[aria-labelledby="GLUXZipUpdate-announce"]').click() // click twice to move focus to ...
    cy.get('[aria-labelledby="GLUXZipUpdate-announce"]').click() // ... the outside of input
    cy.get('#GLUXZipConfirmationValue').should('have.text', '60018')
    cy.get('[name="glowDoneButton"]').click()
    cy.get('#glow-ingress-line2').should('include.text', 'Des Plaines 60018')

  });
  it("TASK-3: Validate the Amazon Search Results", () => {
   cy.get('#twotabsearchtextbox').type('Mug{enter}')
  //  cy.get('.a-section.a-spacing-small.a-spacing-top-small').eq(0)// or .first() instead of eq(0)
   cy.get('.a-section.a-spacing-small.a-spacing-top-small').eq(0).then(($el) => {
    const str = $el.text();
    cy.wrap(Number(str.slice(str.indexOf('over') + 5, str.indexOf('results') - 1)
    .replace(',', ''))).should('be.above', 0)
  })
  });

  it("TASK-4: Validate the Google Amazon Footer Columns", () => {
    const footerColumns = ['Get to Know Us', 'Make Money with Us', 'Amazon Payment Products', 'Let Us Help You'];

    cy.get('.navFooterLinkCol').each(($el, index) => {
      cy.wrap($el).should('include.text', footerColumns[index])
    })
    
  });
});