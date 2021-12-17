import { selector } from '../fixtures/selectors'

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get(selector.signin_button).click()
    cy.wait(500)
    cy.get(selector.email).type(email, {delay:100}).should('have.value', email)
    cy.get(selector.confirm_button).click()
    // cy.clickRecaptcha()
    cy.intercept('POST','api/graphql').as('emailVerified')
    cy.wait('@emailVerified')
    cy.get(selector.password, {delay:100}).should('be.visible').type(password)
    cy.get(selector.confirm_button).click()
    // cy.get('iframe[src*=recaptcha]')
    //     .its('0.contentDocument')
    //     .should(d => d.getElementById('recaptcha-token').click())
    cy.intercept('GET', 'api/users/me').as('signedIn')
    cy.wait('@signedIn')
})
Cypress.Commands.add("clickRecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
