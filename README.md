# Banco Web Tests

<div align="center">
  <img src="https://img.shields.io/badge/Cypress-14.5.1-17202A?style=for-the-badge&logo=cypress" alt="Cypress" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Reports-Mochawesome-4B5563?style=for-the-badge" alt="Mochawesome" />
</div>

## Objetivo do projeto

Este projeto foi criado para demonstrar aos alunos da Mentoria 2.0 como automatizar testes de interface e fluxos de negócio com Cypress e JavaScript.

A proposta é apresentar na prática:

- estrutura de um projeto de testes automatizados
- organização por funcionalidades
- uso de Custom Commands para reaproveitamento de código
- validação de regras de negócio em fluxos reais
- geração de relatórios para acompanhamento dos resultados
- integração com a API e com a aplicação web em execução localmente

O foco principal é ensinar automação de testes de ponta a ponta, com atenção à legibilidade, manutenção e qualidade da suíte.

## Visão geral

Este repositório contém testes automatizados para validar cenários de login e transferência em um sistema bancário web.

Os cenários cobertos incluem:

- login com credenciais válidas
- login com credenciais inválidas
- transferência com dados válidos
- bloqueio de transferência acima de R$ 5.000,00 sem autenticação

## Componentes do projeto

### 1. Cypress

O Cypress é a principal ferramenta de automação usada para simular interações do usuário diretamente no navegador.

Ele é responsável por:

- abrir a aplicação web
- navegar entre páginas
- preencher formulários
- clicar em botões
- validar textos e mensagens exibidas ao usuário

### 2. JavaScript

Os testes foram implementados em JavaScript para manter a suíte simples, clara e de fácil entendimento para alunos que estão começando na automação de testes.

### 3. Custom Commands

A organização com Custom Commands permite reaproveitar ações comuns em vários testes e manter o código mais legível.

Os comandos customizados ajudam a:

- centralizar a lógica de login
- simplificar fluxos de transferência
- evitar duplicação de código
- facilitar a manutenção da automação

### 4. Fixtures

Os arquivos em `cypress/fixtures` armazenam dados de teste, como usuários e senhas, evitando que valores repetidos fiquem espalhados pelo código.

### 5. Testes end-to-end

Os testes estão em `cypress/e2e` e são organizados por funcionalidade:

- `login.cy.js` → cenários de autenticação
- `transferencia.cy.js` → cenários de transferência

### 6. Relatórios

O projeto utiliza o plugin `cypress-mochawesome-reporter` para gerar relatórios visuais e estruturados após a execução dos testes.

Esses relatórios ajudam a:

- verificar rapidamente os testes que passaram ou falharam
- analisar falhas com mais clareza
- compartilhar resultados com alunos, mentores e equipes

### 7. API e aplicação web

Para que a suíte funcione corretamente, a API e a aplicação web devem estar em execução antes da execução dos testes.

- API: https://github.com/juliodelimas/banco-api
- Aplicação Web: https://github.com/juliodelimas/banco-web

A URL base da aplicação web configurada no projeto é:

- `http://localhost:4000`

## Estrutura do projeto

```text
.
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── transferencia.cy.js
│   ├── fixtures/
│   │   └── credenciais.json
│   ├── support/
│   │   ├── commands.js
│   │   ├── commands/
│   │   │   ├── login.js
│   │   │   └── transferencia.js
│   ├── screenshots/
│   ├── videos/
│   └── reports/
├── cypress.config.js
├── package.json
├── README.md
└── node_modules/
```

## Dependências do projeto

Todas as dependências do projeto estão declaradas no arquivo `package.json`.

O projeto utiliza principalmente:

- Cypress
- JavaScript
- Cypress Mochawesome Reporter
- dependências de suporte do ambiente Node.js

## Pré-requisitos

Antes de executar os testes, confirme que você possui:

1. Node.js instalado
2. npm instalado
3. dependências do projeto instaladas
4. aplicação web em execução
5. API em execução

> Observação: a versão atual do projeto foi ajustada para manter compatibilidade com Node.js 18, incluindo a configuração do plugin de relatórios.

## Instalação

No diretório raiz do projeto, execute:

```bash
npm install
```

## Execução dos testes

### Executar todos os testes em modo headless

```bash
npm test
```

### Executar testes em modo headless com navegador visível

```bash
npm run cy:headed
```

### Abrir a interface do Cypress

```bash
npm run cy:open
```

### Executar a suíte com relatório gerado automaticamente

```bash
npm run test:report
```

## Como a aplicação precisa estar rodando

Antes de executar a suíte, a API e a interface web devem estar iniciadas localmente.

### 1. Rodar a API

Siga as instruções do repositório:

- https://github.com/juliodelimas/banco-api

### 2. Rodar a aplicação web

Siga as instruções do repositório:

- https://github.com/juliodelimas/banco-web

### 3. Validar a aplicação

Depois que os dois projetos estiverem em execução, verifique se a aplicação está acessível em:

```text
http://localhost:4000
```

## Documentação dos testes

### Testes de login

Arquivo: `cypress/e2e/login.cy.js`

Cenários:

- login com credenciais válidas
- login com credenciais inválidas

Esses testes validam:

- acesso ao sistema com usuário autenticado
- bloqueio de acesso com dados incorretos
- mensagens exibidas ao usuário

### Testes de transferência

Arquivo: `cypress/e2e/transferencia.cy.js`

Cenários:

- transferência realizada com dados válidos
- bloqueio de transferência acima de R$ 5.000,00 sem token/autenticação

Esses testes validam:

- preenchimento dos campos obrigatórios
- seleção de contas
- valor da transferência
- mensagem de sucesso ou erro

## Documentação dos Custom Commands

Os comandos customizados ficam na pasta `cypress/support/commands` e servem para encapsular ações repetitivas.

### `fazerLoginComCredenciaisValidas()`

Responsável por:

- acessar a tela de login
- preencher usuário e senha válidos
- enviar o formulário
- autenticar corretamente no sistema

### `fazerLoginComCredenciaisInvalidas()`

Responsável por:

- tentar autenticar com usuário e senha inválidos
- verificar o comportamento esperado do sistema
- validar mensagem de erro

### `realizarTransferencia(contaOrigem, contaDestino, valor)`

Responsável por:

- selecionar a conta de origem
- selecionar a conta de destino
- preencher o valor da transferência
- clicar no botão de transferir

Esse comando centraliza a rotina principal do fluxo de transferência e reduz duplicação entre cenários.

### `verificarMensagemNoToast(mensagem)`

Responsável por:

- localizar a mensagem exibida no toast
- validar o texto retornado pelo sistema
- garantir que o feedback visual foi exibido corretamente

## Dados de teste

Os dados usados nos testes ficam em:

- `cypress/fixtures/credenciais.json`

Esse arquivo armazena credenciais válidas e inválidas para facilitar a manutenção e reduzir duplicação de valores no código.

## Relatórios e artefatos

Ao executar a suíte com relatório, os arquivos são gerados na pasta:

```text
cypress/reports/
```

Essa pasta contém os relatórios HTML e JSON produzidos pela integração com o `cypress-mochawesome-reporter`.

Além disso, screenshots e vídeos podem ser encontrados em:

```text
cypress/screenshots/
cypress/videos/
```

## Dicas para uso

- Rode um teste específico com o comando:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

- Para depuração visual, utilize:

```bash
npx cypress run --headed --spec "cypress/e2e/transferencia.cy.js"
```

- Para gerar relatórios legíveis, utilize:

```bash
npm run test
```

## Status do projeto

- ✅ Estrutura base de testes automatizados pronta
- ✅ Organização por funcionalidades e Custom Commands
- ✅ Configuração para relatórios com Cypress Mochawesome
- ✅ Documentação do fluxo de execução e pré-requisitos
- ✅ Preparado para uso em ambiente de mentoria e demonstração

## Como contribuir

1. Clone o projeto localmente
2. Instale as dependências com `npm install`
3. Inicie a API e a aplicação web
4. Execute os testes com `npm test`
5. Analise os relatórios gerados em `cypress/reports/`

## Conclusão

Este projeto é um exemplo prático de automação de testes com Cypress para ensinar alunos da Mentoria 2.0 a:

- automatizar fluxos reais de aplicações web
- estruturar testes de forma organizada
- reaproveitar ações com Custom Commands
- validar regras de negócio e feedback do usuário
- usar relatórios para acompanhar a execução dos testes

O objetivo é transformar a automação em uma prática acessível, organizada e aplicável em projetos reais.
