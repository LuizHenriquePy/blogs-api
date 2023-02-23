## Sumário
- [Motivação](#motivação)
- [Tecnologias usadas](#tecnologias-usadas)
- [Como executar o projeto](#como-executar-o-projeto)
- [Documentação](#documentação)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [API](#api)
    - [\> Endpoint POST /login:](#-endpoint-post-login)
    - [\> Endpoint POST /user:](#-endpoint-post-user)
    - [\> Endpoint GET /user/:id:](#-endpoint-get-userid)
    - [\> Endpoint GET /user:](#-endpoint-get-user)
    - [\> Endpoint POST /categories:](#-endpoint-post-categories)
    - [\> Endpoint GET /categories:](#-endpoint-get-categories)
    - [\> Endpoint POST /post:](#-endpoint-post-post)
    - [\> Endpoint GET /post:](#-endpoint-get-post)
    - [\> Endpoint GET /post/:id:](#-endpoint-get-postid)
    - [\> Endpoint PUT /post/:id:](#-endpoint-put-postid)
    - [\> Endpoint DELETE /post/:id:](#-endpoint-delete-postid)
    - [\> Endpoint DELETE /user/me:](#-endpoint-delete-userme)
- [Créditos](#créditos)

# Motivação
O objetivo ao desenvolver esse projeto foi estudar ORM e **JWT**. Para estudar ORM escolhi **Sequelize** visto que é uma tecnologia bem estabelecida no mercado.
Neste projeto pude entender que:
-  **Migrations** são uma maneira de evoluir a estrutura da banco de dados (tabelas, colunas e relacionamentos) de forma organizada, segura e produtiva;
- **Seeds** são muito úteis para testes ou pré-popular o banco de dados;
- **Transaction** servem para garantir a **atomicidade** do banco de dados;
- **Operações** são a base de todo ORM. São métodos que facilitam o CRUD;
- **JWT** é usado para garantir a integridade da mensagem. Garantido que ela não foi adulterada;
- **Relacionamentos** (1:1, 1:N e N:N) até que são um pouco mais simples com ORM;

# Tecnologias usadas
- Sequelize
- JavaScript
- Docker
- Eslint
- Joi
- Express.js
- Node.js
- Nodemon
- NYC
- JWT
- MySQL

# Como executar o projeto
1 - Levante os containers:
```sh
docker-compose up -d --build
```
2 - Acesse o container:
```sh
docker exec -it blogs_api bash
```
3 - Instale as dependências:
```sh
npm install
```
4 - De permissão para o container modificar a pasta app:
```sh
chown -R root /app
```
5 - Crie o banco de dados e execute as migrations:
```sh
npm run prestart
```
6 - Execute as seeds:
```sh
npm run seed
```
7 - Execute o projeto:
```sh
npm run debug
```
8 - Use algum serviço para fazer requisições HTTP:
- As requisições deve ser feitas no localhost na porta 3000
- Dicas de serviços: Thunder Client e Insomnia

# Documentação
## Estrutura do projeto
## API
### > Endpoint POST /login:
Corpo da requisição:
```json
{
  "email": "email",
  "password": "senha"
}
```
Resposta:
  - Status code: 200
  - json:
     ```json
    {
      "token": "código JWT"
    }
    ```

### > Endpoint POST /user:
Corpo da requisição:
```json
{
  "displayName": "name",
  "email": "email",
  "password": "senha",
  "image": "url da imagem"
  // o campo image não é obrigatório
}
```
Resposta:
  - Status code: 201
  - json:
     ```json
    {
      "token": "código JWT"
    }
    ```

### > Endpoint GET /user/:id:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 200
  - json:
     ```json
    {
      "id": id,
      "displayName": "nome",
      "email": "email",
      "image": "url da imagem"
    },
    ```

### > Endpoint GET /user:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 200
  - json:
     ```json
    [
      {
        "id": id,
        "displayName": "nome",
        "email": "email",
        "image": "url da imagem"
      },
      /* ... */
    ]
    ```

### > Endpoint POST /categories:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Corpo da requisição:
```json
{
  "name": "name",
}
```
Resposta:
  - Status code: 201
  - json:
     ```json
    {
      "id": id,
      "name": "nome",
    }
    ```

### > Endpoint GET /categories:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 200
  - json:
     ```json
    [
      {
          "id": id,
          "name": "nome"
      },
      /* ... */
    ]
    ```

### > Endpoint POST /post:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Corpo da requisição:
```json
{
  "title": "titulo",
  "content": "conteúdo",
  "categoryIds": [id, id, ...]
}
```
Resposta:
  - Status code: 201
  - json:
     ```json
    {
      "id": id,
      "title": "titulo",
      "content": "conteúdo",
      "userId": id,
      "updated": "data da atualização",
      "published": "data de publicação"
    }
    ```

### > Endpoint GET /post:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 200
  - json:
     ```json
    [
      {
        "id": id,
        "title": "titulo",
        "content": "conteúdo",
        "userId": id,
        "updated": "data da atualização",
        "published": "data de publicação",
        "user": {
            "id": id,
            "displayName": "nome",
            "email": "email",
            "image": "url da imagem"
        },
        "categories": [
          {
            "id": id,
            "name": "nome"
          }
        ]
      },
      /* ... */
    ]
    ```

### > Endpoint GET /post/:id:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 200
  - json:
     ```json
    {
      "id": id,
      "title": "titulo",
      "content": "conteúdo",
      "userId": id,
      "updated": "data da atualização",
      "published": "data de publicação",
      "user": {
          "id": id,
          "displayName": "nome",
          "email": "email",
          "image": "url da imagem"
      },
      "categories": [
        {
          "id": id,
          "name": "nome"
        }
      ]
    }
    ```

### > Endpoint PUT /post/:id:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Corpo da requisição:
```json
{
  "title": "titulo",
  "content": "conteúdo"
}
```
Resposta:
  - Status code: 200
  - json:
     ```json
    {
      "id": id,
      "title": "titulo",
      "content": "conteúdo",
      "userId": id,
      "updated": "data da atualização",
      "published": "data de publicação",
      "user": {
          "id": id,
          "displayName": "nome",
          "email": "email",
          "image": "url da imagem"
      },
      "categories": [
        {
          "id": id,
          "name": "nome"
        }
      ]
    }
    ```

### > Endpoint DELETE /post/:id:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 204

### > Endpoint DELETE /user/me:
Header da requisição:
```json
Authorization: "token(código JWT)"
```
Resposta:
  - Status code: 204

# Créditos
Esses arquivos foram desenvolvidos pela Trybe:
- /src/config/ (tudo)
- /src/seeders/ (tudo)
- /src/app.js (parcial)
- /src/serve.js (parcial)
- Dockerfile (tudo)
- docker-compose.yml (tudo)
- package.json (parcial)]
- .eslintignore (tudo)
- .sequelizerc (tudo)
- .eslintrc.json (tudo)
- package-lock.json (parcial)

> todo os outros arquivos foram desenvolvidos por mim