import { selector } from '../../fixtures/selectors';
import { data } from '../data';

export var edit_nationality = (country) => {
    cy.get(selector.nationality_section).within(() => {
        cy.get(selector.toggle_button).click()
        cy.get(selector.nationality_dropdown).select(country)
        cy.get(selector.birthdate_save_button).click()
    })
    
}
export var validate_nationality = (country) => {
    cy.get(selector.nationality_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', country)
    })
}
