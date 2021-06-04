class Navigation {
    get loginBtn() {
        return cy.get('a[href="/login"]')
    }

    clickLoginBtn() {
        this.loginBtn.click()
    }
    get registerBtn() {
        return cy.get('a[href="/register"]')
    }

    clickRegisterBtn() {
        this.registerBtn.click()
    }
     
    get professorBtn() {
        return cy.get('a[href="/professors/create"]')
    }

    clickProfessorBtn() {
        this.professorBtn.click()
    }

    
    get gradebookBtn() {
        return cy.get(':nth-child(5) > .nav-link')
    }

    clickGradebookBtn() {
        this.gradebookBtn.click()
    }
}
export const navigation = new Navigation()