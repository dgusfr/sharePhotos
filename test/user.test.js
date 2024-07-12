let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

describe("User registration", () => {
  test("You must register a user successfully", () => {
    //alteração para a cada execução gerar um email unico
    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = { name: "Diego", email: "email@email.com", password: "123456" };

    //Requisição HTTP automatizada
    request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);
      })
      .catch((err) => {
        fail(err);
      });
  });

  test("Prevent user from registering using empty data", () => {
    let user = { name: "", email: "", password: "" };

    request
      .post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(400);
      })
      .catch((err) => {
        fail(err);
      });
  });

  test("Prevent user from registering using repeated email", () => {

  });
});
