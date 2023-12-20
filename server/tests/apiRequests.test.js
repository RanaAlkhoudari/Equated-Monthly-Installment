const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const EmiModel = require("../models/emiModel");

const body = {
  loanValue: 100,
  interestRate: 20,
  loanTerm: 10,
  email: "test@test.com",
};

const emi = "1.93";

describe("Get emi", () => {
  test("Should respond with a 404 status code & return an error message", async () => {
    const res = await request.get("/calculateEmi");
    expect(res.statusCode).toBe(404);
    expect(res._body).toMatchObject({ message: "Emi not found" });
  });

  test("Should respond with a 200 status code & return emi", async () => {
    //Create emi entity first to be saved in-memory db
    await request.post("/").send(body);
    const res = await request.get("/calculateEmi");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].emi).toBe(emi);
  });
});

describe("Create emi", () => {
  test("Should respond with a 201 status code & return emi and check that the data is saved", async () => {
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

  //Using invalid email address
  test("Should respond with a 400 status code & return an error message", async () => {
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
