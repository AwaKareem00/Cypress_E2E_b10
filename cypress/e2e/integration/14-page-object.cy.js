/// <reference types="cypress"/>
import LoginPage from '../../pages/loginpage'

const loginPage = new LoginPage()

describe('Login Page Test', () => {
  beforeEach(() => {
    cy.clickCard('Login Function')
  })

  it('Login without POM', () => {
    cy.get('#username').type(Cypress.env('UI_USERNAME'))

    cy.get('#password').type(Cypress.env('UI_PASSWORD'))

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it('Login with POM', () => {
    loginPage.clickTestingDropdownOption('Backend Testing')

    // loginPage.userLogin(Cypress.env('UI_USERNAME'), Cypress.env('UI_PASSWORD'))
    // loginPage.getSuccessMessage().should('be.visible')
  })

  /**
   * 1. Navigate to Login Project Page
   * 2. Enter the wrong username and the password
   * 3. Validate error message is "Invalid Username entered!"
   */

  it('Login with POM - Negative', () => {
    
  })
})