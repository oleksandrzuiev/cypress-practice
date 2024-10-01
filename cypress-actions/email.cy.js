/// <reference types="cypress" />

describe('Lection 19, Email', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('Email required error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Olexandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412@gmail.com').clear();
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Email required');
    });

    it('Email is incorrect error', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupName').type('Olexandr');
        cy.get('#signupLastName').type('Zuiev');
        cy.get('#signupEmail').type('qasd38412');
        cy.get('#signupPassword').type('dd_The_giperion77');
        cy.get('#signupRepeatPassword').type('dd_The_giperion77');
        cy.get('.invalid-feedback').should('have.text', 'Email is incorrect');
    });

    it('Border Color is red', () => {
        cy.get('.hero-descriptor_btn').click();
        cy.get('#signupEmail').type('qasd38412');
        cy.get('#signupName').type('Oleksandr');
        cy.get('.is-invalid').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
})