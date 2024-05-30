/// <reference types="cypress"/>

import GitHubHomePage from '../../pages/GithubHomePage'
import GitHubLoginPage from '../../pages/GithubLoginPage'

const gitHubHomePage = new GitHubHomePage()

const gitHubLoginPage = new GitHubLoginPage()



describe('Practice04 - Validate the GitHub', () => {
  beforeEach(() => {
    // cy.visit(`${Cypress.env('base_URL')}`)
    cy.visit('https://github.com/')
  })

  it('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', () => {
    gitHubHomePage.getLogo().should('be.visible')

    const headerText = ['Product', 'Solutions', 'Open Source', 'Pricing']

    gitHubHomePage.getHeaderMenuItems().each(($el, index) => {
      cy.wrap($el).should('contain.text', headerText[index])
    })
  })



  it('TASK-2: Validate the GitHub Home Page Search and Signing Header Items', () => {

    gitHubHomePage.getSearchInput().should('be.visible').and('have.attr', 'placeholder', 'Search or jump to...')

    gitHubHomePage.getSignInButton().should('be.visible').and('contain.text', 'Sign in')

    gitHubHomePage.getSignUpButton().should('be.visible').and('contain.text', 'Sign up')
  })


  it('TASK-3: Validate the GitHub Login Page Sign in Form', () => {
    gitHubHomePage.clickSignInButton()
    gitHubLoginPage.getHeaderLogo().should('be.visible')
    gitHubLoginPage.getFormHeader().should('have.text', 'Sign in to GitHub') // locates header before navigating to loginPage on Cypress
    gitHubLoginPage.getUsernameLabel().should('be.visible').and('contain.text', 'Username or email address')
    gitHubLoginPage.getPasswordLabel().should('be.visible').and('contain.text', 'Password')
    gitHubLoginPage.getPasswordInput().should('be.enabled').and('be.visible')
    gitHubLoginPage.getForgotPasswordLink().should('be.visible').and('have.attr', 'href')
    gitHubLoginPage.getForgotPasswordLink().should('have.text', 'Forgot password?')
    gitHubLoginPage.getPasskey().should('have.text', 'Sign in with a passkey')
    gitHubLoginPage.getCreateAnAccount().should('have.text', 'Create an account')

  })

  it('TASK-4: Validate the GitHub Login Page Footer Links', () => {
    gitHubHomePage.clickSignInButton()
    gitHubLoginPage.getFooterLinks().should('have.length', 6)

    const expectedTexts = [
      'Terms',
      'Privacy',
      'Docs',
      'Contact GitHub Support',
      'Manage cookies',
      'Do not share my personal information'
    ]

    gitHubLoginPage.getFooterLinks().each(($el, index) => {
      cy.wrap($el).should('contain.text', expectedTexts[index])
    })
  })

  it('TASK-5: Validate the GitHub Login Page Invalid Login Attempt ', () => {

    gitHubHomePage.clickSignInButton()
    gitHubLoginPage.getUsernameInput().type('johndoe')

    gitHubLoginPage.getPasswordInput().type('test1234')

    gitHubLoginPage.clickSignInButtonNew()

    gitHubLoginPage.getErrorMessage().should('contain.text', 'Incorrect username or password.')

  })

})