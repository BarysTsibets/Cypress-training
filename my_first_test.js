/// <reference types = "cypress"/>

it('google test', function(){

cy.visit('https://google.com/')
cy.get('.gLFyf').click()
cy.get('.gLFyf').type('udemy{enter}')
cy.wait(4000)
cy.contains('Видео').click()


})


it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').click().type('Admin')
    cy.get('#txtPassword').click().type("admin123")
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#searchSystemUser_userType').select("Admin")
    
    
})

