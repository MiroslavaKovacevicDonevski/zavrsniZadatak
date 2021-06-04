class Professor{
    get nameInput() {
        return cy.get('input[id="input-default"]')
    }

    get lastNameInput() {
        return cy.get('input[id="input-default1"]')
    }

    get addBtn() {
		return cy.get('.btn-image')
    }
	get imageInput() {
        return cy.get('#__BVID__45')
    }

    get submitBtn() {
		return cy.get('.btn-secondary')
    }

    profesorNew () {
        this.nameInput.type("profesor Mira")
        this.lastNameInput.type("Nekako")
        this.addBtn.click()
        this.imageInput.type("https://upload.wikimedia.org/wikipedia/en/3/3f/Oxalis_tetraphylla_flower.jpg")
        this.submitBtn.click()
    }
}
export const professor = new Professor()

