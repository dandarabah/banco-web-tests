describe('Login', () => {
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('Lia.Rosa')
    cy.get('#senha').click().type('425133')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

    it('Login com dados inválidos deve impedir acesso ao sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('Lia.Rosa')
    cy.get('#senha').click().type('567890')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })

})