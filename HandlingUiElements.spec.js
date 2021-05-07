/// <reference types = "cypress"/>

describe('UI Elements', function(){

    it('Verify InputBox & Radio Button', function(){
        
        cy.visit('https://demo.nopcommerce.com/')             // visit URL
        cy.url().should('include','nopcommerce')              // verify URL should include 'nopcommerce'
        cy.title().should('eq', 'nopCommerce demo store')     //verify page title

        cy.get('#small-searchterms').should('be.visible').should('be.enabled').type('Mac')
        cy.get('#small-search-box-form > .button-1').should('be.visible').click()

        //cy.title().should('eq', 'Project1')                   // verify title of the page

        cy.get('#advs').should('be.visible').check().should('be.checked').should('have.value', 'true')        //pick checkbox 
        }
    )
  }
)