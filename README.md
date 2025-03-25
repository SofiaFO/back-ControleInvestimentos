# Controle Investimento - Backend  

Este projeto é o backend de uma aplicação para gerenciamento de investimentos, responsável por fornecer uma API REST que permite criar, listar, editar e excluir investimentos. A API realiza validações importantes, como garantir que os campos estejam preenchidos, que o valor investido seja positivo e que a data do investimento não seja no futuro.  

## 🚀 Funcionalidades da API  
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
- **File System (fs)**: Utilizado para persistir dados em um arquivo JSON local.  

---

## 🚀 Como Rodar o Projeto Localmente  

### Pré-requisitos  
Certifique-se de que você tenha o **Node.js** e o **npm** instalados em sua máquina.  

### Passo a passo  
1. Clone o repositório:  
   ```bash  
   git clone <URL_DO_REPOSITÓRIO>  
   cd investment-tracker-backend  
   ```  

2. Instale as dependências:  
   ```bash  
   npm install  
   ```  

3. Crie a pasta `data` e o arquivo `investimento.json`:  
   - Dentro do diretório raiz, crie uma pasta chamada `data`.  
   - Dentro da pasta `data`, crie um arquivo `investimento.json` e adicione um array vazio:  
     ```json  
     []  
     ```  

4. Inicie o servidor:  
   ```bash  
   npm start  
   ```  

5. O backend estará rodando em:  
   ```
   http://localhost:3000  
   ```  
