# **Projeto: EcomWebapp**

## **Descrição**

Este projeto é uma aplicação web que integra um back-end construído com **Flask** (Python) e um front-end desenvolvido com **React**. O objetivo é criar uma aplicação com autenticação JWT (JSON Web Tokens), permitindo que usuários façam login, acessem rotas protegidas e que haja controle de acesso baseado em papéis de usuário (*roles*), como **administrador** e **usuário comum**.

## **Índice**

- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Back-end (Flask)](#back-end-flask)
    - [Configurando o Ambiente Virtual](#configurando-o-ambiente-virtual)
    - [Instalando as Dependências](#instalando-as-dependências)
    - [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
    - [Migrando o Banco de Dados](#migrando-o-banco-de-dados)
    - [Executando o Servidor Flask](#executando-o-servidor-flask)
  - [Front-end (React)](#front-end-react)
    - [Instalando as Dependências](#instalando-as-dependências-1)
    - [Executando o Servidor React](#executando-o-servidor-react)
- [Comandos Úteis](#comandos-úteis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)

## **Funcionalidades**

- Autenticação de usuários usando JWT.
- Controle de acesso baseado em papéis (admin e usuário comum).
- Rotas protegidas no front-end usando o `react-router-dom`.
- Criação de usuários (apenas para administradores).
- Páginas específicas para administradores e usuários comuns.
- Redirecionamento automático com base no papel do usuário após o login.
- Exibição de mensagens de erro e sucesso usando o `react-toastify`.

## **Demonstração**

*Inclua aqui capturas de tela ou GIFs que demonstrem a aplicação em funcionamento.*

## **Pré-requisitos**

### **Back-end**

- Python 3.8 ou superior
- MySQL Server
- Ambiente virtual (recomendado)

### **Front-end**

- Node.js v14 ou superior
- npm (gerenciador de pacotes do Node.js)

## **Instalação**

### **Clonando o Repositório**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```
Back-end (Flask)
Configurando o Ambiente Virtual
Crie um ambiente virtual:
# No Windows
python -m venv venv
# No macOS/Linux
python3 -m venv venv

Ative o ambiente virtual:
# No Windows
venv\Scripts\activate
# No macOS/Linux
source venv/bin/activate

Instalando as Dependências
pip install -r requirements.txt

Configuração do Banco de Dados
Crie um banco de dados MySQL:
CREATE DATABASE nome_do_banco;


Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=sua_chave_secreta
JWT_SECRET_KEY=sua_chave_secreta_jwt
DATABASE_URI=mysql+pymysql://usuario:senha@localhost/nome_do_banco

substitua usuario, senha e nome_do_banco pelas informações do seu banco de dados.
Se sua senha contiver caracteres especiais, lembre-se de codificá-los (por exemplo, @ como %40).

Migrando o Banco de Dados
Inicialize as migrações:
flask db init

Crie a migração inicial:
flask db migrate -m "Initial migration."

Aplique as migrações ao banco de dados:
flask db upgrade

Executando o Servidor Flask
Flask run

Front-end (React)
Instalando as Dependências
Navegue até o diretório do front-end:
cd frontend

Instale as dependências:
npm install

Executando o Servidor React
npm start ou npm run dev (se você estiver usando o vite)

<h1>Estrutura do projeto</h1>

![image](https://github.com/user-attachments/assets/03afbea8-8a71-4db1-9d7b-3bb10c225435)

Tecnologias Utilizadas

Back-end

Python 3.x
Flask
Flask-JWT-Extended
Flask-Bcrypt
Flask-Migrate
SQLAlchemy
PyMySQL
Flask-CORS

Front-end

React
Axios
React Router DOM
Formik
Yup
JWT Decode
React Toastify


Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License.

Autores
Daniel Salgado - Desenvolvedor 
