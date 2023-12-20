const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("Get emi", () => {
  const body = {
    loanValue: 100,
    interestRate: 20,
    loanTerm: 10,
    email: "test@test.com",
  };
  const emi = "1.93";
  test("Should respond with a 404 status code & return an error message", async () => {
    const res = await request.get("/calculateEmi");
    expect(res.statusCode).toBe(404);
    expect(res._body).toMatchObject({ message: "Emi not found" });
  });

  test("Should respond with a 200 status code & return emi", async () => {
    //Create emi entity
    await request.post("/calculateEmi").send(body);
    const response = await request.get("/calculateEmi");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].emi).toBe(emi);
  });
});
