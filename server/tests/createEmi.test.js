const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const EmiModel = require("../models/emi");

describe("create emi", () => {
  const body = {
    loanValue: 100,
    interestRate: 20,
    loanTerm: 10,
    email: "rana@gmail.com",
  };
  const emi = "1.93";
  test("should respond with a 201 status code & return emi and check that the data is saved", async () => {
    const res = await request.post("/calculateEmi").send(body);
    expect(res.statusCode).toBe(201);
    expect(res.body.emi).toBe(emi);
    const savedEmi = await EmiModel.find(res.body);
    expect(savedEmi[0].loanValue).toBe(body.loanValue);
    expect(savedEmi[0].interestRate).toBe(body.interestRate);
    expect(savedEmi[0].loanTerm).toBe(body.loanTerm);
    expect(savedEmi[0].email).toBe(body.email);
    expect(savedEmi[0].emi).toBe(emi);
  });
  //Run this test here after sending POST request above to test that GET request return the emi
  test("should respond with a 200 status code & return emi", async () => {
    const res = await request.get("/calculateEmi");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].emi).toBe(emi);
  });
  //Using invalid email address
  test("should respond with a 400 status code & return an error message", async () => {
    const res = await request.post("/calculateEmi").send({
      loanValue: 100,
      interestRate: 20,
      loanTerm: 10,
      email: "ranagmail.com",
    });
    expect(res.statusCode).toBe(400);
    expect(res._body).toMatchObject({
      error: "Invalid email address. Please enter a valid email.",
    });
  });
});
