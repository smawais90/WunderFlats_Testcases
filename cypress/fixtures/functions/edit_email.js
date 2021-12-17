import { selector } from '../../fixtures/selectors';

export var edit_email = (email) => {
    cy.get(selector.email_section).within(() => {
        cy.get(selector.toggle_button).click()
    })
    cy.get(selector.email_field).click().clear().type(email)
    cy.get(selector.email_submission_btn).click()
}
export var validate_email = (email) => {
    cy.get(selector.email_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', email)
    })
}
