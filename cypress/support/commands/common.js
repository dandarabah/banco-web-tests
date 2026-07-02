
Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-entrar')

})

//A função abaixo é um comando customizado que realiza o login com credenciais inválidas. O comando utiliza o método fixture do Cypress para carregar os dados de teste do arquivo credenciais.json, que contém as credenciais válidas e inválidas. Em seguida, o comando utiliza o método get do Cypress para selecionar os campos de usuário e senha, e o método type para preencher os campos com as credenciais inválidas. Por fim, o comando clica no botão "Entrar" para tentar realizar o login.
Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
     cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

//A função abaixo é um comando customizado que verifica se a mensagem exibida no toast é igual à mensagem esperada. O comando recebe como parâmetro a mensagem esperada e utiliza o método should do Cypress para verificar se o texto do elemento com a classe .toast é igual à mensagem esperada.
Cypress.Commands.add('verificarMensagemNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

//A função abaixo é um comando customizado que seleciona uma opção em um campo do tipo combobox. O comando recebe como parâmetro o label do campo e utiliza o método get do Cypress para selecionar o elemento pai do label, que é o campo do tipo combobox. Em seguida, o comando clica no campo e seleciona a opção desejada, que neste caso é "João da Silva". O comando utiliza o método as do Cypress para criar um apelido para o elemento selecionado, que pode ser reutilizado em outros comandos.
Cypress.Commands.add('selecionarOpcaoNaCombox', labelDoCampo => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains('João da Silva').click()
})