/// <reference types = "cypress"/>

describe('Fixtures Suit', function(){

    it('Fixtures Demo test', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')
        cy.get('.button-1').should('be.visible').click()
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})