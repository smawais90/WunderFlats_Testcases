import { selector } from '../../fixtures/selectors';

export var edit_birthdate = (day,month,year) => {
    cy.get(selector.birth_date_section).within(() => {
        cy.get(selector.toggle_button).click()
    })
    cy.get(selector.birth_date_fields).within(() => {
        cy.get(selector.day_field).clear().type(day)
        cy.get(selector.month_field).clear().type(month)
        cy.get(selector.year_field).clear().type(year)
    })
    cy.get(selector.birth_date_section).within(() => {
    cy.get(selector.birthdate_save_button).click()
    })
}
export var validate_birthdate = (day,month,year) => {
    cy.get(selector.birth_date_section).within(() => {
        cy.get(selector.editable_content_container_value).should('have.text', `${day}/${month}/${year}`)
    })
}
