/// <reference types = "cypress"/>

describe('End to end test', function(){

    it('Add to cart full flow', function(){
      
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch") // type 'Apple MacBook Pro 13-inch' in search field
        cy.get('#small-search-box-form > .button-1').click()           // click on the search button




    })
})