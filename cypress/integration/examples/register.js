import {register} from "../../pageObject/registerPage.js"
import {navigation} from "../../pageObject/navigationPage.js"
describe("register case", () => {
    before(() => {
        cy.visit('')
        navigation.clickRegisterBtn()
    })

    it ("login", () => {
        register.registerUser()
    })
})