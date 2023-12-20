const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("get emi", () => {
  test("should respond with a 404 status code & return an error message", async () => {
    const res = await request.get("/calculateEmi");
    expect(res.statusCode).toBe(404);
    expect(res._body).toMatchObject({ message: "Emi not found" });
  });
});
