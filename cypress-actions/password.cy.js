/// <reference types="cypress" />

describe('Lection 19, Password', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Wrong data error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412@gmail.com');
        cy.get('#signupPassword').type('123');
        cy.get('#signupRepeatPassword').type('123');
        cy.get('.invalid-feedback').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('Password required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77').clear();
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Password required');
    });

    it.only('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupPassword').type('123');
        cy.get('#signupRepeatPassword').type('123');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})