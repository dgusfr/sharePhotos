# Aplicativo de compartilhamento de fotos

Este é um aplicativo de compartilhamento de fotos criado usando Node.js, Express e MongoDB com Mongoose. O aplicativo também implementa Desenvolvimento Orientado a Testes (TDD) para garantir qualidade e confiabilidade do código.

<div align="center">
  <img src="img/logo.png" alt="Imagem do Projeto" width="400">
</div>

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="JavaScript" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/node.png" alt="Node.js" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/mongodb.png" alt="MongoDB" width="100"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

Este projeto é uma aplicação de compartilhamento de fotos onde os usuários podem se registrar, fazer login e postar fotos. A aplicação utiliza Node.js com Express para o backend e MongoDB com Mongoose para o banco de dados. Os testes são realizados utilizando Jest e Supertest para garantir a funcionalidade do código.

## Funcionalidades

- Registro de Usuário
- Autenticação de Usuário
- Postagem de Fotos

## Explicação

### Código do Projeto

#### app.js

```javascript
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("./models/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

let User = mongoose.model("User", user);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/user", async (req, res) => {
  try {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    let user = await User.findOne({"email": req.body.email});
    if (user) {
      res.status(400).json({ error: "Email já cadastrado" });
      return;
    }
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = app;
```

Este trecho de código configura o servidor Express, conecta ao MongoDB e define as rotas básicas da aplicação, incluindo o registro de usuários.

## Como Usar
`1.` Clone este repositório.

`2.` Instale as dependências usando npm install.

`3.` Inicie o servidor com npm start.

`4.` Execute os testes com npm test.

## Estrutura do Projeto

src/

    models/

        User.js
    app.js

    server.js


test/

    server.test.js

    user.test.js


## Autor
Desenvolvido por Diego Franco