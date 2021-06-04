import {register} from "../../pageObject/registerPage.js"
import {navigation} from "../../pageObject/navigationPage.js"
import {professor} from "../../pageObject/professorPage.js"
import {gradebook} from "../../pageObject/gradebookPage.js"
describe("login case", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });

    it("visit home page",() => {
        cy.visit('')
        navigation.clickLoginBtn()
    })

    it ("login", () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login', (req) => {}).as('loginUser')
        register.loginUser()
        cy.wait('@loginUser').then((intercept) => {
            cy.log(JSON.stringify(intercept.response))
            expect(intercept.response.statusCode).to.eql(200)
        })

    })

    it("new professor", () => {
        navigation.clickProfessorBtn()
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/professors/create', (req) => {}).as('professorNew')
        professor.profesorNew()
        cy.wait('@professorNew').then((intercept) => {
            cy.log(JSON.stringify(intercept.response))
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it("new gradebook", () => {
        navigation.clickGradebookBtn()
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/gradebooks/store', (req) => {}).as('gradebookNew')
        gradebook.gradebookNew()
        cy.wait(4000)
        cy.wait('@gradebookNew').then((intercept) => {
            cy.log(JSON.stringify(intercept.response))
            expect(intercept.response.statusCode).to.eql(201)
        })
    })
    afterEach(() => {
        cy.saveLocalStorage();
      });
})