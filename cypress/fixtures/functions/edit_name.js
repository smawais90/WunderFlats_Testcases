import { selector } from '../../fixtures/selectors';

export var edit_name = (first_name,last_name) => {
    cy.get(selector.full_name_section).within(() => {
        cy.get(selector.toggle_button).click()
    })
    cy.get(selector.first_name_field).clear().type(first_name)
    cy.get(selector.last_name_field).clear().type(last_name)
    cy.get(selector.name_submission_btn).click()
    cy.wait(2000)
    // cy.get(selector.full_name_section).within(() => {
    //     cy.get(selector.toggle_button).click()
    // })
}
export var validate_name = (first_name,last_name) => {
    cy.get(selector.full_name_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', `${first_name} ${last_name}`)
    })
}
