describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://127.0.0.1:5173/')
        cy.contains('button','Log in').click()
        cy.get('input[type="username"]').type("Ron")
        cy.get('input[type="password"]').type("Ron1")
        cy.get('button[type="submit"]').click()
        cy.get('#outlined-content').type("Hey! This is cypress testing note creation")
        cy.get('#outlined-title').type("Cypress Test")
        cy.contains('button','Create').click()
        cy.contains('Cypress Test').should('be.visible')
        cy.contains('Cypress Test').get('#ellipsis-icon').click()
    })
})