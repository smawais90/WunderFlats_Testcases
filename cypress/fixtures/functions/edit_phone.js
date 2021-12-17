import { selector } from '../../fixtures/selectors';

export var edit_phone = (phone_ext,phone) => {
    cy.get(selector.phone_section).within(() => {
        cy.get(selector.toggle_button).click()
    })
    cy.get(selector.phone_ext_dropdown).select(phone_ext)
    cy.get(selector.phone_input).click().clear().type(phone)
    cy.get(selector.phone_submit_button).click()
    cy.wait(2000)
}
export var validate_phone = (phone_ext,phone) => {
    cy.get(selector.phone_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', `+${phone_ext} ${phone}`)
    })
}
