describe('Login', () => {
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('Lia.Rosa')
    cy.get('#senha').click().type('425133')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})