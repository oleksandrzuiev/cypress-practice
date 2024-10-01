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

    it.only('Login', () => {
        cy.get('.header_signin').click();
        cy.login('qasd38412+testuser1@gmail.com', 'dd_The_giperion77');
        cy.contains('You have been successfully logged in').should('be.visible');
    })
})