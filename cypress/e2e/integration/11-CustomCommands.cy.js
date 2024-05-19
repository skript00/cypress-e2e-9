/// <reference types="cypress" />

describe("Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("Html Elements");
  });


  it("Parent Commands", () => {

    /* Parent Commands */
    // cy.get()
    // cy.url()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

     cy.selectDropdownOption('#company_dropdown1', 'Apple')

     cy.login('randomEmail@gmai.com', 'TechGlobal')
  });

  it('Child Command', () => {

    // .should()
    // .find()
    // all the action commands

    cy.get('#main_heading').then(($el) => {
      const text = $el.text()

      cy.log(text)
    })


    cy.get('#main_heading').logText().haveText('Html Elements')


  })

});