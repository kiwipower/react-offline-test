/// <reference types="Cypress" />

const url = 'http://localhost:8080';

// Cypress.on('window:before:load', (win) => {
//     const _consoleInfo = win.console.info
//     win.console.info = function () {
//         if (arguments[0].includes('App updated.')) {
//             cy.$$('.restart', top.document).click()
//         }
//         return _consoleInfo.apply(win.console, arguments)
//     }
// })

context('General test', () => {
    beforeEach(() => {
        cy.wait(1000)
        cy.visit(url)
    })

    it('App loaded and working', () => {
        // cy.visit(url)
        cy.get('#logo')
            .should('have.text', 'KiWi Power')

    })

    it('Refresh data button clicked', () => {
        // cy.visit(url)
        cy.get('#refresh-data-button')
            .click()
            .should('have.text', 'Loading...')

        cy.wait(1000)

        cy.get('#refresh-data-button')
            .should('have.text', 'Refresh Data')


        cy.get('.bar-chart')
            .find('.chart-item')
            .its('length').should('be.gte', 0)

    })

    // it('button should be loading', () => {
    //     cy.get('#refresh-data-button')
    //         .should('have.text', 'Loading...')
    // })

})
