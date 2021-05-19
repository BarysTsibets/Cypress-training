/// <reference types = "cypress"/>

class CreateAnAccount{

loginPageCreateAcountField = '#email_create'
CreateAnAccountButton = '#SubmitCreate > span'
CreateAnAccountText = '.page-heading'
Mr = '#id_gender1'
FirstNameField = '#customer_firstname'
LastNameField = '#customer_lastname'
PasswordField = '#passwd'
DayDropDown = '#days'
monthDropDown = '#months'
yearDropDown = '#years'

    


visitSignInPage(){
   return cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
}

enterEmailToCreateAccount(email){
    return cy.get(this.loginPageCreateAcountField).clear().type(email) 
}

clickCreateAnAccountBtn(){
    return cy.get(this.CreateAnAccountButton).click()
}

CreateAnAccountTextPresented(){
    return cy.get(this.CreateAnAccountText)
}

MrRadiobutton(){
    return cy.get(this.Mr)
}

fillFirstName(fname){
    return cy.get(this.FirstNameField).clear().type(fname)
}

fillLastName(lname){
    return cy.get(this.LastNameField).clear().type(lname)
}

fillPassword(pasw){
    return cy.get(this.PasswordField).clear().type(pasw)
}
selectDay(day){
    return cy.get(this.DayDropDown).select(day)
}

selectmonth(month){
    return cy.get(this.monthDropDown).select(month)
}

selectYear(year){
    return cy.get(this.yearDropDown).select(year)
}


}


export default CreateAnAccount