/// <reference types = "cypress"/>

describe('UI Elements2', function(){

    it('Hobbies check boxes', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')

        //check checkboxes one by one
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket') 
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')  

        // uncheck checkboxes one by one
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').should('not.be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //check multiply checkboxes
        cy.get('[type="checkbox"]').check(['Hockey', 'Movies'])

    })

    it('Skills Drop Down menu (static)', function(){
        
        // Pick something from static drop down menu
        cy.get('#Skills').select('APIs').should('have.value', 'APIs')

    })


    it.only('Multiply options Drop Down menu', function(){

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Japanese').click()

    })
})