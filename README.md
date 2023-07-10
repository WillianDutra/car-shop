
## Car Shop

Car Shop é um projeto back-end onde foram utilizados Typescript e MongoDB junto com Mongoose para realizar o CRUD.

É possível cadastrar um veículo, seja ele um carro ou motocicleta, atualizá-lo, filtrar pelo seu ID, listar todos e deletar do Banco de Dados. O projeto contem também testes unitários usando Chai e Sinon.

## Aprendizados com este projeto

- Typescript
- POO
- Mongoose
- MongoDB
- Docker
- Sinon
- Chai



## Instalação

Caso queira instalar o projeto e dar uma olhada mais de perto.

```bash
1. Clonando o projeto
  git clone git@github.com:WillianDutra/car-shop.git

2. Entrando na pasta
  cd car-shop

3. Instalando as dependências
  npm install

4. Iniciando docker
  docker-compose up -d

5. Crie uma conexão na extensão do MongoDB com a URL:
  mongodb://localhost:27017
```
Após a configuração é só fazer as requisições a partir da url: `http://localhost:3001`

- `/cars` - GET e POST.
-  `/cars/:id` - GET, PUT e DELETE.
- `/motorcycles` - GET e POST.
- `/motorcycles/:id` - GET, PUT e DELETE.
