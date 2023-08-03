Uso da API

Essa API é projetada para gerenciar informações sobre alimentos e usuários. Ela oferece endpoints para criar, listar, buscar por ID, buscar por nome, atualizar e deletar registros de alimentos e usuários.

Endpoints da API
Alimentos:

POST /api/food/create: Cria um novo registro de alimento no banco de dados. Recebe um objeto JSON com os detalhes do alimento e retorna o novo registro criado.

GET /api/food: Retorna uma lista de todos os alimentos cadastrados no banco de dados.

GET /api/food/:id: Retorna os detalhes de um alimento específico com base no ID fornecido.

GET /api/food/name/:name: Retorna uma lista de alimentos que correspondem ao nome fornecido.

DELETE /api/food/:id: Deleta o alimento com o ID fornecido do banco de dados.

PUT /api/food/:id: Atualiza os detalhes do alimento com o ID fornecido no banco de dados.

Usuários:

POST /api/user/login: Realiza o login do usuário. Recebe um objeto JSON com as credenciais de email e senha e retorna um token de autenticação.

POST /api/user/register: Registra um novo usuário. Recebe um objeto JSON com os detalhes do usuário (email, nome e senha) e retorna o novo registro criado.

Exemplos de uso
Criação de Alimento:

POST /api/food/create

{
"name": "Hambúrguer",
"description": "Delicioso hambúrguer com queijo e bacon",
"price": 15.99,
"image": "hamburguer.jpg",
"categoryId": 1
}
Listagem de Alimentos:

GET /api/food
Busca de Alimento por ID:

GET /api/food/1
Busca de Alimentos por Nome:

GET /api/food/name/Hambúrguer
Atualização de Alimento:

PUT /api/food/1

{
"name": "Hambúrguer Especial",
"description": "Delicioso hambúrguer com queijo, bacon e molho especial",
"price": 17.99,
"image": "hamburguer_especial.jpg",
"categoryId": 1
}
Exclusão de Alimento:

DELETE /api/food/1
Login do Usuário:

POST /api/user/login

{
"email": "usuario@example.com",
"password": "senha123"
}
Registro de Novo Usuário:

POST /api/user/register

{
"email": "novousuario@example.com",
"name": "Novo Usuário",
"password": "senha456"
}
Observações

Substitua localhost:3000 pelo endereço do servidor onde a API está hospedada.

Certifique-se de enviar as requisições com os dados corretos nos corpos das requisições e no formato JSON.

A API pode exigir autenticação para algumas rotas, dependendo da sua configuração. Certifique-se de estar autenticado corretamente, se necessário, para acessar as rotas protegidas.
