/// <reference types="cypress"/> 

describe('Contact Info Check', () => {
    it('Check Contact Info', () => {
        cy.visit('https://www.google.com');
        cy.get('textarea[name="q"]').type('Byndyusoft{enter}');
        cy.get('h3').contains('Byndyusoft').click();
        cy.url().should('include', 'byndyusoft');
        cy.get('.knowMore__container > .btn').click();
        cy.get('a[href="http://t.me/alexanderbyndyu"]').should('exist').and('be.visible');
    });
})