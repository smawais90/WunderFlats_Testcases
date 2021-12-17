import 'cypress-xpath';
import { data } from '../../fixtures/data'
import { selector } from '../../fixtures/selectors';
import { verify_document_screen_QR_code } from '../../fixtures/functions/verify_documents'

describe('Verify Docs', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    localStorage.clear();
    // cy.viewport(1900,1200)
    cy.login(data.email,data.password)

  })
  it ("it should redirect to QR code verification", () => {
    cy.visit('/en/account/profile')
    verify_document_screen_QR_code()
  })
})