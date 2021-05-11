/// <reference types = "cypress"/>

describe('Custom Command Suit', function(){

    it('LogIn flow ', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type('admin@yourstore.com')                                               // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')                // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()
    })


    it('Add customer test', function()         // Login + add customer flow
    {
        // login flow
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type('admin@yourstore.com')                                              // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')               // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()

        //add customer actions
        cy.log('Adding customer actions *********')
    })

    it('Edit customer test', function()        // Login + Edit customer flow
    {
        // login flow
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type('admin@yourstore.com')                                            // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')            // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()

        //Edit customer actions
        cy.log('Edit customer actions *********')
    })

    it('Delete customer test', function()        // Login + Delete customer flow
    {
        // login flow
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type('admin@yourstore.com')                                            // email stored in this.data.email variable
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')            // password stored in this.data.password variable
        cy.get('.button-1').should('be.visible').click()

        //Delete customer actions
        cy.log('Delete customer actions *******')
    })
})