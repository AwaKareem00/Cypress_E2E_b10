/// <reference types="cypress"/>


describe('File Download & File Upload', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-2')
  })

  it('Test Case 01 - Validate the login form', () => {
    cy.get('#username')
      .should('be.visible')
      .prev()
      .should('have.text', 'Please enter your username')

    cy.get('#password')
      .should('be.visible')
      .prev()
      .should('have.text', 'Please enter your password')

    cy.get('#login_btn')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'LOGIN')

    cy.get(':nth-child(4) > a')
      .should('be.visible')
      .and('have.text', 'Forgot Password?')
      .and('not.have.attr', 'disabled')
  })

  it('Test Case 02 - Validate the valid login, Test Case 03 - Validate the logout', () => {
    const login = ['TechGlobal', 'Test1234']
    cy.get('#username, #password').each(($el, index) => {
      cy.wrap($el)
        .type(login[index])
    })

    cy.get('#login_btn').click()
    cy.get('#success_lgn').should('have.text', 'You are logged in')
    cy.get('#logout').should('be.visible')
    cy.get('#logout').click()
    cy.get('.pt-6').should('be.visible')
  })

  it('Test Case 04 + 05 - Validate the Forgot Password? Link and Reset Password modal', () => {
    cy.get(':nth-child(4) > a').click()
    cy.get('#modal_title, .delete, #email, #submit').each(($el) => {
      cy.wrap($el).should('be.visible')
    })

    cy.get('[for="email"]')
      .should('contain.text', 
        'Enter your email address and we\'ll send you a link to reset your password.')

    cy.get('#submit')
      .should('be.enabled')
      .and('have.text', 'SUBMIT')
    cy.get('.delete').click()
    cy.get('.modal-card').should('not.exist')
  })

  it('Test Case 06 - Validate the Reset Password form submission', () => {
    cy.get(':nth-child(4) > a').click()
    cy.get('#email').type('awa.kareem00@gmail.com')
    cy.get('#submit').click()

    cy.get('#confirmation_message')
      .should('contain.text', 
        'A link to reset your password has been sent to your email address.')
  })

  it('Test Case 07 - Validate the invalid login with empty credentials', () => {
    cy.get('#login_btn').click()
    cy.get('#error_message')
      .should('contain.text', 
        'Invalid Username entered!')
  })

  it('Test Case 08 - Validate the invalid login with the wrong username', () => {
    const user1 = ['John', 'Test1234']
    cy.get('#username, #password').each(($el, index) => {
      cy.wrap($el)
        .type(user1[index])
    })

    cy.get('#login_btn').click()
    cy.get('#error_message').should('have.text', 'Invalid Username entered!')
  })
  it('Test Case 09 - Validate the invalid login with the wrong password', () => {
    const user2 = ['TechGlobal', '1234']
    cy.get('#username, #password').each(($el, index) => {
      cy.wrap($el)
        .type(user2[index])
    })

    cy.get('#login_btn').click()
    cy.get('#error_message').should('have.text', 'Invalid Password entered!')
  })
  it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
    const user3 = ['John', '1234']
    cy.get('#username, #password').each(($el, index) => {
      cy.wrap($el)
        .type(user3[index])
    })
      
    cy.get('#login_btn').click()
    cy.get('#error_message').should('have.text', 'Invalid Username entered!')
  })
})
    
  