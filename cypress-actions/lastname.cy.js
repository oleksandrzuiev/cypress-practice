/// <reference types="cypress" />

describe('Lection 19, Last Name', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Last Name is required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('Zuiev').clear();
        cy.get('#signupEmail').type('qasd38412@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Last name required');
    });

    it('Last Name is invalid error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('321');
        cy.get('#signupEmail').type('qasd38412@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Last name is invalid');
    });

    it('Last Name has to be from 2 to 20 characters long error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Oleksandr');
        cy.get('#signupLastName').type('pbbpprimesure');
        cy.get('#signupEmail').type('qasd38412@gmail.com');
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
    });

    it('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupLastName').type('321');
        cy.get('#signupName').type('Oleksandr');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})