describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then((credenciais) => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button', 'Entrar').click() 
    })    

  it('Deve transferir quando informo dados e valores válidos', () => {    
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem') //O .as permite criar um apelido para o elemento selecionado, que pode ser reutilizado em outros comandos. O Cypress permite criar apelidos para elementos, rotas e variáveis.
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('João da Silva').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Lua Dourada').click()  
        
        cy.get('#valor').click().type('1000')
        cy.contains('button', 'Transferir').click()
        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})