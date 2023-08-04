Introdução do README.md

# API de Alimentos 🍔🍕🍩

Bem-vindo à API de Alimentos! Esta é uma API RESTful que permite gerenciar registros de alimentos e usuários em um banco de dados. Com ela, você pode realizar operações como criação, leitura, atualização e exclusão de alimentos, além de autenticação de usuários.

## Configuração do Ambiente

Antes de começar a utilizar a API, siga os passos abaixo para configurar o ambiente corretamente:

1. Certifique-se de ter o Node.js e o npm instalados em seu computador.

2. Dentro das pastas `backend` e `frontend`, execute o comando `npm install` para instalar as dependências necessárias.

3. No diretório raiz do projeto, entre na pasta "app" onde o código da API está localizado.

4. Execute o comando `docker-compose up --build`. Isso iniciará o ambiente Docker, onde a API será executada juntamente com o banco de dados.

5. Após o Docker estar em execução, entre no diretório "app/backend" usando o seguinte comando: `cd app/backend`.

6. No diretório "app/backend", execute os seguintes comandos para criar e configurar o banco de dados usando o Prisma:

```
npx prisma generate
npx prisma migrate dev --name init
```

O comando `npx prisma generate` é usado para gerar os artefatos do Prisma com base no schema do banco de dados.

O comando `npx prisma migrate dev --name init` é usado para criar e aplicar a primeira migração no banco de dados, chamada "init".

## Endpoints da API 🌐

A API oferece os seguintes endpoints para interação:

**Alimentos 🍔:**

- `POST /api/food/create`: Cria um novo registro de alimento no banco de dados. Recebe um objeto JSON com os detalhes do alimento e retorna o novo registro criado.

- `GET /api/food`: Retorna uma lista de todos os alimentos cadastrados no banco de dados.

- `GET /api/food/:id`: Retorna os detalhes de um alimento específico com base no ID fornecido.

- `GET /api/food/name/:name`: Retorna uma lista de alimentos que correspondem ao nome fornecido.

- `DELETE /api/food/:id`: Deleta o alimento com o ID fornecido do banco de dados.

- `PUT /api/food/:id`: Atualiza os detalhes do alimento com o ID fornecido no banco de dados.

**Usuários 👤:**

- `POST /api/user/login`: Realiza o login do usuário. Recebe um objeto JSON com as credenciais de email e senha e retorna um token de autenticação.

- `POST /api/user/register`: Registra um novo usuário. Recebe um objeto JSON com os detalhes do usuário (email, nome e senha) e retorna o novo registro criado.

## Exemplos de Uso 📝

Aqui estão alguns exemplos de como usar os endpoints da API:

**Criação de Alimento 🍔:**

```
POST /api/food/create

{
  "name": "Hambúrguer",
  "description": "Delicioso hambúrguer com queijo e bacon",
  "price": 15.99,
  "image": "hamburguer.jpg",
  "categoryId": 1
}
```

**Listagem de Alimentos 🍽️:**

```
GET /api/food
```

**Busca de Alimento por ID 🔍:**

```
GET /api/food/1
```

**Busca de Alimentos por Nome 🔍:**

```
GET /api/food/name/Hambúrguer
```

**Atualização de Alimento 🔄:**

```
PUT /api/food/1

{
  "name": "Hambúrguer Especial",
  "description": "Delicioso hambúrguer com queijo, bacon e molho especial",
  "price": 17.99,
  "image": "hamburguer_especial.jpg",
  "categoryId": 1
}
```

**Exclusão de Alimento 🗑️:**

```
DELETE /api/food/1
```

**Login do Usuário 🚪:**

```
POST /api/user/login

{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Registro de Novo Usuário 📝:**

```
POST /api/user/register

{
  "email": "novousuario@example.com",
  "name": "Novo Usuário",
  "password": "senha456"
}
```

## Observações 📌

- Substitua `localhost:3000` pelo endereço do servidor onde a API está hospedada, caso seja necessário.

- Certifique-se de enviar as requisições com os dados corretos nos corpos das requisições e no formato JSON.

- A API pode exigir autenticação para algumas rotas, dependendo da sua configuração. Certifique-se de estar autenticado corretamente, se necessário, para acessar as rotas protegidas.

- Divirta-se usando a API! Em caso de dúvidas ou problemas, consulte a documentação ou contate o desenvolvedor.

Agora que o ambiente está configurado, você pode aproveitar todos os recursos da API para criar e gerenciar registros de alimentos e usuários. Bom desenvolvimento! 🚀
