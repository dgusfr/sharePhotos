let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("aplicattions inport 3000", async () => {
  return request
    .get("/")
    .then((res) => {
      let status = res.statuscode;
      expect(status).toEqual(200);
    })
    .catch((err) => {
      console.log(err);
    });
});
