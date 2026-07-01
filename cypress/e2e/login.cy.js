describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    // Act
    cy.fixture('credencias').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-digitar-credenciais-validas')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-entrar')

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

    it('Login com dados inválidos deve impedir acesso ao sistema', () => {
    // Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })

})