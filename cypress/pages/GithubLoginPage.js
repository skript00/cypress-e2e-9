/// <reference types="cypress"/>

class GitHubLoginPage {

  // Locators

  getFormHeader() {
    return cy.get('h1').first()
  }

  getHeaderLogo() {
    return cy.get('.octicon-mark-github')
  }

  getFooterLinks() {
    return cy.get('.list-style-none > li')
  }

  getUsernameLabel(){
    return cy.get('[for="login_field"]')
  }

  getPasswordLabel(){
    return cy.get('[for="password"]')
  }

  getUsernameInput(){
    return cy.get('#login_field')
  }

  getPasswordInput(){
    return cy.get('#password')
  }

  getForgotPasswordLink() {
    return cy.get('#forgot-password')
  }

  getPasskey(){
    return cy.get('.Button-content> .Button-label > span')
  }

  getCreateAnAccount() {
    return cy.get('.mt-1').children().first()
  }



  getSignInButtonNew() {
    return cy.get('[name="commit"]')
  }
  
  getErrorMessage() {
    return cy.get('.js-flash-alert')
  }

  // Methods

  clickSignInButtonNew() {
    this.getSignInButtonNew().click()
  }



}

export default GitHubLoginPage