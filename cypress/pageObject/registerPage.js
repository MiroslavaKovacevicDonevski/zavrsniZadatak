const data = require ("../fixtures/data.json")
const faker = require('faker')
class Register {
	get firstNameInput() {
		return cy.get('input[id="first_name"]')
 }
	get lastNameInput() {
		return cy.get('input[id="last_name"]')
 }
    get emailInput() {
        return cy.get('input[id="email"]')
    }
    get passwordInput() {
        return cy.get('input[id="password"]')
    }
    get confPasswordInput() {
        return cy.get('input[id="password_confirmation"]')
    }
    get termsInput() {
        return cy.get('input[id="terms_conditions"]')
    }
	get registerBtn() {
		return cy.get('button[type="submit"]')
 }
	clickRegisterBtn() {
		this.registerBtn.click()
 }
 get userPasswordInput() {
    return cy.get('input[id="userPassword"]')
}

 registerUser () {
     this.firstNameInput.type(data.registerData.firstName)
     this.lastNameInput.type(data.registerData.lastName)
     this.emailInput.type(data.registerData.email)
     this.passwordInput.type(data.registerData.password)
     this.confPasswordInput.type(data.registerData.confirmPass)
     this.termsInput.check({force:true})
     this.registerBtn.click()
 }

 loginUser () {
    this.emailInput.type(data.loginData.email)
    this.userPasswordInput.type(data.loginData.password)
    this.registerBtn.click()
 }
}
export const register = new Register()
