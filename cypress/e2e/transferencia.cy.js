describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })    

  it('Deve transferir quando informo dados e valores válidos', () => {    
        //Act    
        cy.realizarTransferencia('João da Silva', 'Lua Dourada', '600') //O comando customizado realizarTransferencia é utilizado para realizar uma transferência entre contas. O comando recebe como parâmetro a conta de origem, a conta de destino e o valor da transferência, e utiliza os comandos customizados selecionarOpcaoNaCombox e get para preencher os campos do formulário de transferência. Em seguida, o comando clica no botão "Transferir" para enviar a solicitação de transferência.

        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

        it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {    
        //Act
        cy.realizarTransferencia('João da Silva', 'Lua Dourada', '5000.01') 
        
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})