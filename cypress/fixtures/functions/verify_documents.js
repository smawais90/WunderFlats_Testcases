import { Decoder } from '@nuintun/qrcode';
const qrcode = new Decoder();
import { selector } from '../../fixtures/selectors';

export var verify_document_screen_QR_code = () => {
    cy.get(selector.verify_document_section).within(() => {
        // cy.get(selector.toggle_button).click()
        cy.get(selector.start_verification_button).click()
        // cy.intercept('POST', 'api/nexus').as('new_window')
        // cy.wait('@new_window')
        cy.wait(10000)

    })
    cy.get('iframe').within(() => {
        cy.get('.q1qzpvqf').screenshot('qrcode', {
            onAfterScreenshot($el, props) {
                console.log(props)
                qrcode
                    .scan(props.path)
                    .then(result => {
                        console.log(result);
                    })
                }
            })
    })
    
}
