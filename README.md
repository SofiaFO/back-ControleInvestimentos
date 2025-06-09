# Controle Investimento - Backend

Este projeto é o backend de uma aplicação para gerenciamento de investimentos, responsável por fornecer uma API REST que permite criar, listar, editar e excluir investimentos. Agora utiliza **Prisma ORM** e **MySQL** para persistência dos dados.

## Funcionalidades da API

A API possui as seguintes rotas e funcionalidades:

### Rotas de Investimentos (`/api/investments`)
- **POST `/api/investments`**
  - Cria um novo investimento.
  - **Validações:**
    - Todos os campos devem ser preenchidos (`nome`, `tipo`, `valor`, `data`).
    - O valor investido deve ser maior que 0.
    - A data do investimento não pode ser uma data futura.

- **GET `/api/investments`**
  - Lista todos os investimentos cadastrados.

- **GET `/api/investments/:id`**
  - Retorna um investimento específico com base no ID fornecido.

- **PUT `/api/investments/:id`**
  - Atualiza os dados de um investimento existente.
  - **Validações:**
    - O valor investido deve ser maior que 0, caso informado.
    - A data do investimento não pode ser uma data futura, caso informada.

- **DELETE `/api/investments/:id`**
  - Remove um investimento com base no ID fornecido.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript para backend.
- **Express**: Framework web para criação de APIs REST.
- **CORS**: Middleware para permitir acesso à API de diferentes origens.
- **Prisma ORM**: ORM para integração com banco de dados relacional.
- **MySQL**: Banco de dados relacional utilizado para persistência dos dados.
- **dotenv**: Gerenciamento de variáveis de ambiente.

---

## Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** e **npm** instalados.
- **MySQL** instalado e rodando localmente.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd back-ConctroleInvestimentos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco de dados MySQL chamado `investimentos` (ou outro nome de sua preferência).
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo (ajuste usuário, senha e banco conforme sua configuração):
     ```
     DATABASE_URL="mysql://usuario:senha@localhost:3306/investimentos"
     ```

4. **Execute as migrações do Prisma para criar as tabelas:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Gere o Prisma Client:**
   ```bash
   npx prisma generate
   ```

6. **Inicie o servidor:**
   ```bash
   npm start
   ```
   ou, para desenvolvimento:
   ```bash
   npm run dev
   ```

7. O backend estará rodando em:
   ```
   http://localhost:4000
   ```

---

## Observações

- Não é mais necessário criar arquivos ou pastas para persistência manual dos dados, pois tudo é salvo no banco MySQL via Prisma.
- Certifique-se de que o banco de dados está rodando antes de iniciar o backend.
- Para visualizar ou alterar o schema do banco, edite o arquivo `prisma/schema.prisma` e rode novamente as migrações.

---
