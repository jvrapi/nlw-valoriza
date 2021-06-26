<h1 align="center"> 
<img src="./src/assets/nlw-together-logo.svg" alt="NLW Together">

</h1>

<p align="center">
  <a href="#open_book-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :open_book: Sobre
Projeto desenvolvido durante a NLW Together, na trilha NodeJS da RocketSeat.

## :rocket: Tecnologias
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Class Transformer](https://github.com/typestack/class-transformer)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://github.com/davidbanham/express-async-errors)
- [Json Web Token](https://github.com/auth0/node-jsonwebtoken)
- [Typeorm](https://typeorm.io/#/) + [SQLite3](https://github.com/mapbox/node-sqlite3)
- [UUID](https://github.com/uuidjs/uuid)


## :information_source: Como usar

Para clonar e rodar esse projeto, você precisará do [Git](https://git-scm.com) e do  [Node.js v14.16](https://nodejs.org) ou maior. No projeto, foi utilizado o [Yarn v1.22.5](https://yarnpkg.com). Na sua interface de linha de comandos, execute:

```bash
# Clonar este repositorio
$ git clone https://github.com/jvrapi/nlw-valoriza.git

# Entre na pasta do repositorio
$ cd nlw-valoriza

# Instale as dependências
$ yarn install ou npm install

# Inicie o servidor
$ yarn dev ou npm run dev

```
Ao iniciar o servidor, ele automaticamente irá criar na pasta ```src/database``` um arquivo chamado de ```database.sqlite```. Para criar as tabelas do banco de dados, execute:

```bash
# Criar tabelas do banco de dados:
$ yarn typeorm migration:run ou npm run typeorm migration:run
```
## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---


<div align="center">


Feito com  ❤ por [João Vitor Santos](https://github.com/jvrapi) 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-João%20Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaovitorssdelima/)](https://www.linkedin.com/in/joaovitorssdelima/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:joaooviitoorr@gmail.com)](mailto:joaooviitoorr@gmail.com) 
[![Hotmail Badge](https://img.shields.io/badge/-Hotmail-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:joaooviitorr@hotmail.com)](mailto:joaooviitorr@hotmail.com)
	
</div>