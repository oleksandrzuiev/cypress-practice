/// <reference types="cypress" />

describe('Lection 19, Register', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Register button is disabled', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412+testuser1@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.contains('Register').should('be.disabled');
    });

    it('Registration is successfully done', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412+testuser2@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77', { sensitive: true });
        cy.get('#signupRepeatPassword').type('dd_The_giperion77', { sensitive: true });
        cy.contains('Register').click();
        cy.contains('Registration complete').should('be.visible');
    });

    it.only('Registration User already exist error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412+testuser1@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77', { sensitive: true });
        cy.get('#signupRepeatPassword').type('dd_The_giperion77', { sensitive: true });
        cy.contains('Register').click();
        cy.get('.alert-danger').should('have.text', 'User already exists');
    });
})