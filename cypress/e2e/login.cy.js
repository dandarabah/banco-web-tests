describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //A '/' é a rota base definida no arquivo cypress.config.js. O inicio do teste será sempre a página de login, que é a rota base do sistema, que é igual para todos os ambientes (dev, qa, prod). Por isso, não é necessário criar variáveis de ambiente para cada ambiente.
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    // Act
    cy.fazerLoginComCredenciaisValidas() 
    cy.screenshot('apos-clicar-em-entrar')

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
 
    it('Login com dados inválidos deve impedir acesso ao sistema', () => {
    // Act
    cy.fazerLoginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })

})