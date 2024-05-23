/// <reference types="cypress"/>

describe("Practice03 - Validate Wikipedia", () => {
  beforeEach(() => {
    cy.visit("https://www.wikipedia.org/");
  });


  it("TASK-1: Validate the Wikipedia Logo and Slogan", () => {
    cy.get('.central-textlogo__image.sprite').should('be.visible').and('include.text', 'Wikipedia')
    .next().should('be.visible').and('include.text', 'The Free Encyclopedia');
  })


  it("TASK-2: Validate the Wikipedia Top Ten Languages", () => {
    cy.get('[id*=js-link-box-]').should('be.visible')
    cy.get('[id*=js-link-box-]').first().should('include.text','English')
  })


  it("TASK-3: Validate the Wikipedia Search Results", () => {
    cy.get('#searchInput').type('Cypress{enter}');
    cy.title().should('include', 'Cypress');
    cy.url().should('include','Cypress');
    cy.get('.mw-page-title-main').should('have.text', 'Cypress')
   })

  it("TASK-4: Validate the Wikipedia Article Numbers for All Languages", () => {
    cy.get('#js-lang-list-button').click();
    cy.get('.bookshelf-container').next().find('li');

    const arr = [18, 53, 99, 126, 29]
    for(let i = 0; i <= 4; i++){
      cy.get('.hlist').eq(i).find('a').should('have.length', arr[i]);
    }
  })
})