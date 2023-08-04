# ContactHub Server

## Descrição do Projeto

O ContactHub é uma aplicação web de gerenciamento de contatos que permite o cadastro de clientes e seus respectivos contatos. Com o ContactHub, você pode facilmente cadastrar, visualizar, atualizar e excluir clientes e seus contatos associados, além de ter acesso a um relatório completo que apresenta informações sobre o cliente e os contatos vinculados a ele.

[Repositório Front-end](https://github.com/ChristianVada/ContactHub-Client)

## Funcionalidades

O ContactHub oferece as seguintes funcionalidades:

### Cadastro de Clientes

- Nome Completo: Insira o nome completo do cliente.
- Email: Digite o endereço de email do cliente.
- Telefone: Informe o número de telefone do cliente.
- Data de Registro: Registro automatico da data em que o cliente foi cadastrado.

### Cadastro de Contatos

- Nome Completo: Insira o nome completo do contato.
- Email: Digite o endereço de email do contato.
- Telefone: Informe o número de telefone do contato.
- Data de Registro: Registro automatico da data em que o contato foi cadastrado.

### Operações CRUD

O ContactHub permite realizar operações básicas de CRUD (Criar, Ler, Atualizar e Excluir) tanto para clientes quanto para contatos.

### Associação de Contatos

Um cliente pode ter vários contatos vinculados a ele, permitindo uma organização completa das informações.

## Tecnologias Utilizadas

O projeto ContactHub foi desenvolvido utilizando as seguintes tecnologias:

- Typescript
- Framework and libraries: express, bcryptjs, express-async-errors, jsonwebtoken, pg, typeorm, zod

## Como Usar

1. Clone este repositório.
2. Instale as dependências necessárias usando o comando: `npm install`.
3. Configure o ambiente e o banco de dados de acordo com as instruções fornecidas no arquivo `.env.exemple`.
4. Instale a migração através do comando `npm run typeorm migration:run -- -d src/data-source`.
5. Inicie a aplicação com o comando: `npm run dev`.
