/// <reference types = "cypress"/>

describe('table actions Suit', function(){

    it('Table test', function()
    {
        cy.visit('http://testautomationpractice.blogspot.com/')
        

        // 1) Check that Value presented anywhere in the table
        cy.get('[name="BookTable"]').contains('td', 'Learn Selenium').should('be.visible')


    })
})