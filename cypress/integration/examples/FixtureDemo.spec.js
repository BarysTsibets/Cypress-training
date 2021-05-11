/// <reference types = "cypress"/>

describe('Fixtures Suit', function(){

    // fixture block (fixture/example - contain email and password data)
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data                           //initialization of 'dara' variable
        })
    })



    // "Login to the admin page" flow 
    it('Fixtures Demo test', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().should('be.visible').should('be.enabled').type('admin')
        cy.get('.button-1').should('be.visible').click()
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})