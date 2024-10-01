/// <reference types="cypress" />

class LogInPage {
    open() {
        cy.visit('', {
          auth: {
              username: Cypress.env('authUser'),
              password: Cypress.env('authPassword')
          }
      });
    }
  
    get openLoginForm() {
      return cy.get('.header_signin');
    }

    get loginButton() {
      return cy.contains('Login');
    }
  
    login() {
      this.openLoginForm.click();
      cy.get('#signinEmail').type(Cypress.env('usernameLog'));
      cy.get('#signinPassword').type(Cypress.env('passwordLog'));
      this.loginButton.click();
    }
  
    verifyLoginSuccess() {
      return cy.contains('You have been successfully logged in');
    }
}
  
export default new LogInPage();