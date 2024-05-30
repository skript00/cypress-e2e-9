/// <reference types="cypress"/>

class GitHubHomePage {

  // Locators 

  getLogo() {
    return cy.get('.mr-lg-3').first()
  }

  getHeaderMenuItems() {
    return cy.get('.HeaderMenu-item')
  }

  getSearchInput() {
    return cy.get('[placeholder="Search or jump to..."]')
  }

  getSignInButton() {
    return cy.get('.HeaderMenu-link--sign-in')
  }

  getSignUpButton() {
    return cy.get('.HeaderMenu-link--sign-up')
  }


  // Methods

  clickSignInButton() {
    this.getSignInButton().click()
  }

}
export default GitHubHomePage


