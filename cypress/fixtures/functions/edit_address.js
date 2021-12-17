import { selector } from '../../fixtures/selectors';

export var edit_address = (address1,address2,zipcode,city,state,country) => {
    cy.get(selector.address_section).within(() => {
        cy.get(selector.toggle_button).click()
    })
    cy.get(selector.address_1).clear().type(address1)
    cy.get(selector.address_2).clear().type(address2)
    cy.get(selector.zipcode).clear().type(zipcode)
    cy.get(selector.city).clear().type(city)
    cy.get(selector.state).clear().type(state)
    cy.get(selector.country).select(country)
    cy.get(selector.address_confirm_btn).click()
    cy.wait(2000)
    // cy.get(selector.full_name_section).within(() => {
    //     cy.get(selector.toggle_button).click()
    // })
}
export var validate_address = (address1,city,country) => {
    cy.get(selector.address_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', `${address1}, ${city}, ${country}`)
    })
}
