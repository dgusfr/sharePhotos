let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

describe("User registration", () => {
  test("You must register a user successfully", () => {
    let user = { name: "Victor", email: "email@email.com", password: "123456" };
  });
});
