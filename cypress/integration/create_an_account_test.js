/// <reference types = "cypress"/>

import CreateAnAccount from "../pages/create_an_account_page"


describe ('Create account test suit', function(){

    it('Create An Account Smoke test', function(){

        const ca =new CreateAnAccount()
        
        ca.visitSignInPage('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        //cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
       
        ca.enterEmailToCreateAccount('barystsibets557@gmail.com')
        //cy.get('#email_create').clear().type('barystsibets556@gmail.com')              //input email to start create account
        
        ca.clickCreateAnAccountBtn()
        //cy.get('#SubmitCreate > span').click()

        ca.CreateAnAccountTextPresented().should('contain', 'Create an account')          // 'CREATE AN ACCOUNT' text presented
        //cy.get('.page-heading').should('contain', 'Create an account')   
                       
        ca.MrRadiobutton().should('be.visible').should('not.be.checked').click()
        //cy.get('#id_gender1').should('be.visible').should('not.be.checked').click()     // Click radiobutton 'Mr' 
        
        ca.fillFirstName('Bob')
        //cy.get('#customer_firstname').clear().type('Bob')                               // input customer 'First Name"
        
        ca.fillLastName('Marley')
        //cy.get('#customer_lastname').clear().type('Marley')                             // input customer 'Last Name"
        

        ca.fillPassword('123456')
        //cy.get('#passwd').clear().type('123456')                                        //input password

        ca.selectDay('27').should('have.value', '27') 
        //cy.get('#days').select('27').should('have.value', '27')  
        ca.selectmonth('3')  
        //cy.get('#months').select('2')
        ca.selectYear('2000') 
        //cy.get('#years').select('1995')

        cy.get('#newsletter').check().should('be.checked').and('have.value', '1')      //newsletter checkbox
        cy.get('#optin').check().should('be.checked').and('have.value', '1')           //special offer check box


        cy.get('#company').clear().type('ABC company')                                 // input Company name
        cy.get('#address1').clear().type('100 hollywood blvd, 90028')                  //inpyt Company adress
        cy.get('#address2').clear().type('suit 500')                                   //inpyt Company suit

        cy.get('#city').clear().type('Los Angeles')                                    //inpyt Company City
        cy.get('#id_state').select('2').should('contain.value', '2')                   // Select State 'Alaska'
        cy.get('#postcode').clear().type('90028')                                      //inpyt Zip Code

        cy.get('#id_country').should('have.value', '21')                               // Check that Country preselected as United States

        cy.get('#other').clear().type('Hello World')                                   //type additional information
        cy.get('#phone').clear().type('323 12345678')                                  //type Home Phone
        cy.get('#phone_mobile').clear().type('323 12345678')                           //type Mobile phone

        cy.get('#alias').should('have.value', 'My address').clear().type('test text')

        cy.get('#submitAccount > span').should('be.visible').click()                   //click Register button

        cy.title().should('eq', 'My account - My Store')                               // success assertion

    })
})