let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

describe("User registration", () => {
  test("You must register a user successfully", () => {
    //alteração para a cada execução gerar um email unico
    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = { name: "Victor", email: "email@email.com", password: "123456" };

    request.post("/user").send();
  });
});
