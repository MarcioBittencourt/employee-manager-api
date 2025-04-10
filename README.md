## Description

Este codigo foi desenvolvido para o desafio da YouDeserve.

O desafio escolhido foi o desafio 2: Backend (NestJS)

Objetivo: Criar uma API REST simples utilizando NestJS para gerenciar reconhecimentos entre
colaboradores.
Funcionalidades:
- CRUD de reconhecimentos com os campos:
 - id
 - from (quem enviou)
 - to (quem recebeu)
 - message (mensagem do reconhecimento)
 - coins (quantidade de moedas enviadas)
- Rotas esperadas:
 - POST /recognitions
 - GET /recognitions
 - GET /recognitions/:id
 - DELETE /recognitions/:id
Requisitos:
- Utilizar DTOs e validação com class-validator
- Organização de módulos, serviços e controllers
- Persistência pode ser em array (in-memory) ou SQLite
Diferenciais:
- Documentação da API com Swagger
- Testes unitários simples

## 🧠 Como rodar o projeto localmente
🔧 Requisitos

- Node.js (v18+ recomendado)
- npm ou yarn
- NestJS CLI (opcional, mas útil):
```bash
# development
$ npm i -g @nestjs/cli
```

## 🚀 Passos para rodar o projeto
1. Clone o repositório
```bash
# development
$ git clone https://github.com/MarcioBittencourt/employee-manager-api.git
$ cd employee-manager-api
```

2. Instale as dependências
```bash
# development
$ npm install
```

3. Inicie o servidor em modo desenvolvimento
```bash
# development
$ npm run start:dev
```

4. Acesse a API

- API: http://localhost:3000
- Swagger: http://localhost:3000/api

## 🧪 Rodar os testes
```bash
# development
$ npm run test
```

## ✅ Endpoints disponíveis
| Método | Rota                 | Descrição                        |
|--------|----------------------|----------------------------------|
| POST   | /recognitions        | Criar novo reconhecimento        |
| GET    | /recognitions        | Listar todos reconhecimentos     |
| GET    | /recognitions/:id    | Buscar por ID                    |
| DELETE | /recognitions/:id    | Remover reconhecimento por ID    |
