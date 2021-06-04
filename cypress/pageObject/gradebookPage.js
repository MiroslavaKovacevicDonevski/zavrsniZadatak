const data = require ("../fixtures/data.json")
class Gradebook{

    get nameInput() {
        return cy.get('#name')
    }

    get professor() {
        return cy.get('select[class="mb-4 custom-select"]')
    }

    // get addBtn() {
	// 	return cy.get('button[type="button"]')
    // }
	// get imageInput() {
    //     return cy.get('input[id="__BVID__303"]')
    // }

    get submitBtn() {
		return cy.get('.btn-submit')
    }

    gradebookNew () {
        this.nameInput.type(data.createGradeData.name)
        this.professor.type(data.createGradeData.professor)
        this.submitBtn.click()
    }
}
export const gradebook = new Gradebook()

